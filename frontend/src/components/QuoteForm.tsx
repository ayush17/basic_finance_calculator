import React, { useEffect, useState } from "react";
import { getQuotes, saveQuote, deleteQuote } from "../api/quotes";

import FinanceQuote from "./FinanceQuote";
import FinanceResult from "./FinanceResult";
import SavedQuotes from "./SavedQuotes";

let nextId = 1;

interface FormState {
  cost: string;
  profit: string;
  sellingPrice: string;
  term: string;
  rate: string;
  outOfPocket: string;
  taxRate: string;
}
const QuoteForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    cost: "",
    profit: "",
    sellingPrice: "",
    term: "",
    rate: "",
    outOfPocket: "",
    taxRate: "",
  });

  const [result, setResult] = useState({
    taxes: 0,
    baseLoanAmount: 0,
    interest: 0,
    totalLoanAmount: 0,
    monthlyPayment: 0,
    outOfPocket: 0,
    quoteName: "",
  });
  const [savedQuotes, setSavedQuotes] = useState<any[]>([]);

  useEffect(() => {
    getQuotes().then(setSavedQuotes);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  //Calculation Logic
  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    const { cost, profit, sellingPrice, term, rate, outOfPocket, taxRate } =
      form;

    // ✅ convert to floats
    const c = parseFloat(String(cost));
    const p = parseFloat(String(profit));
    const sp = sellingPrice ? parseFloat(String(sellingPrice)) : c + p;
    const t = parseFloat(String(term));
    const r = parseFloat(String(rate));
    const oop = parseFloat(String(outOfPocket));
    const tr = parseFloat(String(taxRate));

    // ✅ correct formulas
    const taxes = (sp * tr) / 100;
    const baseLoanAmount = sp + taxes - oop;
    const monthlyRate = r / 100 / 12;

    const payment =
      t > 0 && monthlyRate > 0
        ? (baseLoanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -t))
        : baseLoanAmount / t;

    const totalLoanAmount = payment * t;
    const interest = totalLoanAmount - baseLoanAmount;

    setResult({
      taxes,
      baseLoanAmount,
      interest,
      totalLoanAmount,
      monthlyPayment: payment,
      outOfPocket: oop,
      quoteName: "2025 Ford Escape",
    });
  };

  const handleQuoteNameChange = (name: string) => {
    if (result) {
      setResult({ ...result, quoteName: name });
    }
  };

  const handleSave = async () => {
    if (!result) return;

    const newQuote = {
      name: result.quoteName || "Unnamed Quote",
      cost: parseFloat(form.cost),
      profit: parseFloat(form.profit),
      sellingPrice: parseFloat(form.sellingPrice),
      term: parseInt(form.term),
      rate: parseFloat(form.rate),
      taxRate: parseFloat(form.taxRate),
      outOfPocket: parseFloat(form.outOfPocket),
      taxes: result.taxes,
      baseLoanAmount: result.baseLoanAmount,
      interest: result.interest,
      totalLoanAmount: result.totalLoanAmount,
      payment: result.monthlyPayment,
    };

    try {
      const saved = await saveQuote(newQuote); // ✅ POST /api/quotes with full data
      setSavedQuotes((prev) => [...prev, saved]); // update UI
    } catch (error) {
      console.error("❌ Error saving quote:", error);
    }
  };
  const handleDelete = async (id: string) => {
    console.log("this is the id", id);
    await deleteQuote(id); // call backend
    setSavedQuotes((prev) => prev.filter((q) => q._id !== id)); // update UI
  };

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <h1 className="text-center text-3xl font-bold text-indigo-700 mb-8">
        Finance Calculator
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FinanceQuote
          form={form}
          handleChange={handleChange}
          onApply={handleApply}
        />
        <FinanceResult
          result={result}
          onSave={handleSave}
          handleQuoteNameChange={handleQuoteNameChange}
        />
      </div>

      {/* Saved Quotes Section */}
      <SavedQuotes quotes={savedQuotes} onDelete={handleDelete} />
    </div>
  );
};

export default QuoteForm;
