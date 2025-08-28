import React from "react";

interface FinanceResultProps {
  result: any;
  onSave: () => void;
  handleQuoteNameChange: (name: string) => void; // ✅ add this
}

const FinanceResult: React.FC<FinanceResultProps> = ({
  result,
  onSave,
  handleQuoteNameChange,
}) => {
  return (
    <div className="max-w-lg bg-white border rounded-md shadow-sm">
      <div className="px-4 py-2 bg-gray-50 border-b rounded-t-md">
        <h2 className="font-semibold text-gray-700">Result</h2>
      </div>

      <div className="p-4 space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Taxes:</span>
          <span>${result.taxes.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Base Loan Amount:</span>
          <span>${Number(result.baseLoanAmount || 0).toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Interest:</span>
          <span>${result.interest.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Total Loan Amount:</span>
          <span>${result.totalLoanAmount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between font-bold">
          <span>Payment:</span>
          <span>${result.monthlyPayment.toFixed(2)}</span>
        </div>

        <div className="flex justify-between font-bold">
          <span>Out Of Pocket:</span>
          <span>${result.outOfPocket.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Quote Name:</span>
          <input
            type="text"
            value={result.quoteName}
            onChange={(e) => handleQuoteNameChange(e.target.value)} // ✅ use handler
            className="border rounded-md px-2 py-1 text-sm"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={onSave}
            className="bg-black text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-800"
          >
            💾 Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default FinanceResult;
