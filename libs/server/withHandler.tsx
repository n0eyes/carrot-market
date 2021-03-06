import { NextApiRequest, NextApiResponse } from "next";
export interface ResponseType {
  success: boolean;
  [key: string]: any;
}

type method = "GET" | "POST" | "DELETE";

function withHandler(
  method: method,
  fn: (req: NextApiRequest, res: NextApiResponse) => void
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== method) {
      return res.status(405).end();
    }
    try {
      fn(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}

export default withHandler;
