// src/routes/quoteRoutes.ts
import { Router, Request, Response } from "express";
import Quote, { IQuote } from "../models/Quotes";

const router = Router();

// GET all quotes
router.get("/", async (_req: Request, res: Response) => {
  try {
    const quotes: IQuote[] = await Quote.find();
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// POST new quote
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, payment, outOfPocket } = req.body;
    const newQuote = new Quote({ name, payment, outOfPocket });
    const savedQuote = await newQuote.save();
    res.status(201).json(savedQuote);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

// DELETE quote by id
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    await Quote.findByIdAndDelete(req.params.id);
    res.json({ message: "Quote deleted" });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

export default router;
