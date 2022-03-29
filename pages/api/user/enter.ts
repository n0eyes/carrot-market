import client from "libs/server/client";
import withHandler from "libs/server/withHandler";
import { ResponseType } from "libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, phone } = req.body;
  const user = email ? { email } : { phone: +phone };
  const payload = Math.floor(100000 + Math.random() * 900000) + "";

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
