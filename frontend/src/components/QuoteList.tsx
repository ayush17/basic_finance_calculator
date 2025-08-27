import React from "react";
import { deleteQuote } from "../api/quotes";
import type { Quote } from "../types/Quote";

interface Props {
  quotes: Quote[];
  onDeleted: (id: string) => void;
}

const QuoteList: React.FC<Props> = ({ quotes, onDeleted }) => {
  const handleDelete = async (id: string) => {
    await deleteQuote(id);
    onDeleted(id);
  };

  return (
    <div className="bg-white shadow rounded-xl p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Saved Quotes</h2>

      {quotes.length === 0 ? (
        <p className="text-gray-500">No saved quotes yet</p>
      ) : (
        <ul className="space-y-3">
          {quotes.map((q) => (
            <li
              key={q.id}
              className="flex justify-between items-center border-b pb-2 last:border-none"
            >
              <div>
                <strong className="text-indigo-700">{q.quoteName}</strong> —{" "}
                <span className="text-gray-700">
                  ${q.monthlyPayment.toFixed(2)}/mo
                </span>{" "}
                | Out of Pocket: ${q.outOfPocket}
              </div>
              <div className="space-x-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  View
                </button>
                <button
                  onClick={() => handleDelete(q.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuoteList;
