import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    res.send({ content: "You are logged in" });
  } else {
    res.send({ content: "You are not logged in" });
  }
}
