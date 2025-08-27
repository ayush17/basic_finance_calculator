import React, { useEffect, useState } from "react";
import FinanceQuote from "./FinanceQuote";
import FinanceResult from "./FinanceResult";
import SavedQuotes from "./SavedQuotes";

let nextId = 1;
const QuoteForm: React.FC = () => {
  const [form, setForm] = useState({
    cost: 26906,
    profit: 1500,
    sellingPrice: 28406,
    term: 36,
    rate: 5.7,
    outOfPocket: 2000,
    taxRate: 7.5,
  });

  const [result, setResult] = useState({
    taxes: 2130.45,
    baseLoanAmount: 30536.45,
    interest: 1740.58,
    totalLoanAmount: 30277.03,
    monthlyPayment: 841.03,
    outOfPocket: 2000,
    quoteName: "2025 Ford Escape",
  });
  const [savedQuotes, setSavedQuotes] = useState<
    { id: number; name: string; payment: number; outOfPocket: number }[]
  >([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  //Calculation Logic
  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    const { cost, profit, sellingPrice, term, rate, outOfPocket, taxRate } =
      form;

    const sp = sellingPrice || cost + profit;
    const taxes = (sp * taxRate) / 100;
    const baseLoanAmount = sp + taxes;
    const monthlyRate = rate / 100 / 12;

    const payment =
      term > 0 && monthlyRate > 0
        ? (baseLoanAmount * monthlyRate) /
          (1 - Math.pow(1 + monthlyRate, -term))
        : 0;

    const totalLoanAmount = payment * term;
    const interest = totalLoanAmount - baseLoanAmount;

    setResult({
      taxes,
      baseLoanAmount,
      interest,
      totalLoanAmount,
      monthlyPayment: payment,
      outOfPocket,
      quoteName: "2025 Ford Escape",
    });
  };

  const handleSave = () => {
    const newQuote = {
      id: nextId++,
      name: result.quoteName,
      payment: result.monthlyPayment,
      outOfPocket: result.outOfPocket,
    };
    setSavedQuotes((prev) => [...prev, newQuote]);
  };
  const handleDelete = (id: number) => {
    setSavedQuotes((prev) => prev.filter((q) => q.id !== id));
  };

  const handleView = (id: number) => {
    alert("Viewing quote: " + id);
    // later: load quote back into form
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
        <FinanceResult result={result} onSave={handleSave} />
      </div>

      {/* Saved Quotes Section */}
      <SavedQuotes
        quotes={savedQuotes}
        onDelete={handleDelete}
        onView={handleView}
      />
    </div>
  );
};

export default QuoteForm;
