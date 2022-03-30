import client from "libs/server/client";
import withHandler from "libs/server/withHandler";
import { ResponseType } from "libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";
import mail from "@sendgrid/mail";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  mail.setApiKey(process.env.SENDGRID_API_KEY!);
  const { email, phone } = req.body;
  const user = email ? { email } : { phone: +phone };
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });

  if (phone) {
    const result = await twilioClient.messages.create({
      messagingServiceSid: process.env.MESSAGE_SID,
      to: process.env.MY_PHONE!,
      body: payload,
    });
  } else if (email) {
    const email = await mail.send({
      from: "doll4586633@naver.com",
      to: "doll4586633@naver.com",
      subject: "Carrot Market Verification",
      text: payload,
      html: `<strong>Your token is ${payload}</strong>`,
    });
  }
  // user = await client.user.findUnique({
  //   where: {
  //     ...user,
  //   },
  // });
  // if (!user) {
  //   user = await client.user.create({
  //     data: {
  //       name: "Anonymous",
  //       ...user,
  //     },
  //   });
  // }

  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
