// src/models/Quote.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IQuote extends Document {
  name: string;
  payment: number;
  outOfPocket: number;
  createdAt: Date;
}

const QuoteSchema: Schema = new Schema({
  name: { type: String, required: true },
  payment: { type: Number, required: true },
  outOfPocket: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IQuote>("Quote", QuoteSchema);
