import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5050/api/quotes", // ✅ backend on 5050
});

// Fetch all saved quotes
export const getQuotes = async () => {
  const res = await API.get("/");
  return res.data;
};

// Save new quote (✅ full finance data)
export const saveQuote = async (quote: {
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
}) => {
  const res = await API.post("/", quote);
  return res.data;
};

// Delete quote
export const deleteQuote = async (id: string) => {
  const res = await API.delete(`/${id}`);
  return res.data;
};
