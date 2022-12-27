import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  status: string | null;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).send({ status: "Only POST requests allowed" });
  }
  if (!req.body.name || !req.body.contact || !req.body.content) {
    res.status(403).json({ status: "Invalid request" });
  }
  const sendgrid = require("@sendgrid/mail");
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const SENDGRID_EMAIL = process.env.SENDGRID_EMAIL

  sendgrid.setApiKey(SENDGRID_API_KEY);

  const msg = {
    to: SENDGRID_EMAIL,
    from: SENDGRID_EMAIL,
    subject: "Contact from portfolio",
    text: `From: ${req.body.name}\nContact: ${req.body.contact}\n${req.body.content}\n`,
  };
  sendgrid
    .send(msg)
    .then((resp: any) => {
      res.status(200).json({ status: "Success" });
    })
    .catch((error: string) => {
      res.status(500).json({ status: "Something went wrong" });
    });
}
