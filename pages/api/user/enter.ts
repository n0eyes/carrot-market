import client from "libs/server/client";
import withHandler from "libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, phone } = req.body;
  const payload = email ? { email } : { phone: +phone };

  const user = await client.user.upsert({
    //upsert = 탐색, 생성, 갱신을 한번에 하는 메소드
    where: {
      ...payload,
    },
    create: {
      name: "Anonymous",
      ...payload,
    },
    update: {},
  });
  // user = await client.user.findUnique({
  //   where: {
  //     ...payload,
  //   },
  // });
  // if (!user) {
  //   user = await client.user.create({
  //     data: {
  //       name: "Anonymous",
  //       ...payload,
  //     },
  //   });
  // }

  return res.status(200).end();
}

export default withHandler("POST", handler);
