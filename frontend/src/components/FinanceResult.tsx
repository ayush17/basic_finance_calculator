import React from "react";

interface FinanceResultProps {
  result: {
    taxes: number;
    baseLoanAmount: number;
    interest: number;
    totalLoanAmount: number;
    monthlyPayment: number;
    outOfPocket: number;
    quoteName: string;
  };
  onSave: () => void;
}

const FinanceResult: React.FC<FinanceResultProps> = ({ result, onSave }) => {
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

        <div className="flex items-center justify-between">
          <label className="text-gray-700">Quote Name:</label>
          <input
            type="text"
            value={result.quoteName}
            readOnly
            className="border rounded-md px-2 py-1 text-sm"
          />
        </div>

        <button
          onClick={onSave}
          className="mt-3 flex items-center justify-center gap-1 bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
        >
          <span>💾</span> Save
        </button>
      </div>
    </div>
  );
};
export default FinanceResult;
