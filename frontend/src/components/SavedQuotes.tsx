import React, { useState } from "react";

interface Quote {
  _id: string;
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
  createdAt: string;
}

interface SavedQuotesProps {
  quotes: Quote[];
  onDelete: (id: string) => void;
}

const SavedQuotes: React.FC<SavedQuotesProps> = ({ quotes, onDelete }) => {
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);

  return (
    <div className="w-full bg-white border rounded-md shadow-sm mt-8">
      <div className="px-4 py-2 bg-gray-50 border-b rounded-t-md">
        <h2 className="font-semibold text-gray-700">Saved Quotes</h2>
      </div>

      <div className="divide-y">
        {quotes.length === 0 ? (
          <div className="p-4 text-sm text-gray-500">No saved quotes yet</div>
        ) : (
          quotes.map((q) => (
            <div key={q._id} className="flex items-center justify-between p-4">
              <div>
                <h3 className="font-semibold text-gray-800">{q.name}</h3>
                <p className="text-sm text-gray-600">
                  Payment: ${q.payment?.toFixed(2) ?? "0.00"} &nbsp; Out of
                  Pocket: ${q.outOfPocket?.toFixed(2) ?? "0.00"}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedQuote(q)}
                  className="bg-black text-white px-4 py-1.5 rounded-md text-sm hover:bg-gray-800"
                >
                  View
                </button>
                <button
                  onClick={() => onDelete(q._id)}
                  className="bg-red-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {selectedQuote && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setSelectedQuote(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {selectedQuote.name}
            </h3>

            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Cost:</strong> ${selectedQuote.cost.toFixed(2)}
              </p>
              <p>
                <strong>Profit:</strong> ${selectedQuote.profit.toFixed(2)}
              </p>
              <p>
                <strong>Selling Price:</strong> $
                {selectedQuote.sellingPrice.toFixed(2)}
              </p>
              <p>
                <strong>Term:</strong> {selectedQuote.term} months
              </p>
              <p>
                <strong>Rate:</strong> {selectedQuote.rate}%
              </p>
              <p>
                <strong>Tax Rate:</strong> {selectedQuote.taxRate}%
              </p>
              <p>
                <strong>Out Of Pocket:</strong> $
                {selectedQuote.outOfPocket.toFixed(2)}
              </p>
              <p>
                <strong>Taxes:</strong> ${selectedQuote.taxes.toFixed(2)}
              </p>
              <p>
                <strong>Base Loan Amount:</strong> $
                {selectedQuote.baseLoanAmount.toFixed(2)}
              </p>
              <p>
                <strong>Interest:</strong> ${selectedQuote.interest.toFixed(2)}
              </p>
              <p>
                <strong>Total Loan Amount:</strong> $
                {selectedQuote.totalLoanAmount.toFixed(2)}
              </p>
              <p>
                <strong>Monthly Payment:</strong> $
                {selectedQuote.payment.toFixed(2)}
              </p>
              <p className="text-xs text-gray-500">
                Created At: {new Date(selectedQuote.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedQuotes;
