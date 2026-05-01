import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib/mongodb";
import Review, { IReview } from "../../../models/Review";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === "GET") {
    const reviews: IReview[] = await Review.find().sort({ createdAt: -1 });
    return res.status(200).json(reviews);
  }

  if (req.method === "POST") {
    const { name, comment, rating } = req.body;
    if (!name || !comment || !rating) {
      return res.status(400).json({ error: "Name, comment, and rating are required" });
    }
    const review = await Review.create({ name, comment, rating });
    return res.status(201).json(review);
  }

  res.status(405).json({ error: "Method not allowed" });
}
