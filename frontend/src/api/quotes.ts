import axios from "axios";
import type { Quote } from "../types/Quote";

const api = axios.create({
  baseURL: "http://localhost:4000", // backend URL
});

// Fetch all quotes
export const getQuotes = async (): Promise<Quote[]> => {
  const res = await api.get("/quotes");
  return res.data;
};

// Create a new quote
export const createQuote = async (
  data: Omit<
    Quote,
    | "id"
    | "taxes"
    | "baseLoanAmount"
    | "interest"
    | "totalLoanAmount"
    | "monthlyPayment"
  >
): Promise<Quote> => {
  const res = await api.post("/quotes", data);
  return res.data;
};

// Delete a quote
export const deleteQuote = async (id: string): Promise<void> => {
  await api.delete(`/quotes/${id}`);
};
