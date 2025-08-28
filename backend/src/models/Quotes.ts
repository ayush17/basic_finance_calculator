// src/models/Quotes.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IQuote extends Document {
  name: string;
  cost: number;
  profit: number;
  sellingPrice: number;
  term: number;
  rate: number;
  taxRate: number;
  outOfPocket: number;
  taxes: number;
  baseLoanAmount: number;
  interest: number;
  totalLoanAmount: number;
  payment: number;
  createdAt: Date;
}

const QuoteSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    cost: Number,
    profit: Number,
    sellingPrice: Number,
    term: Number,
    rate: Number,
    taxRate: Number,
    outOfPocket: Number,
    taxes: Number,
    baseLoanAmount: Number,
    interest: Number,
    totalLoanAmount: Number,
    payment: Number,
  },
  { timestamps: true }
);

export default mongoose.model<IQuote>("Quote", QuoteSchema);
