import React from "react";

interface Field {
  label: string;
  name: string;
  prefix?: string;
  suffix?: string;
}

interface FinanceQuoteProps {
  form: Record<string, any>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onApply: (e: React.FormEvent) => void;
}

const fields: Field[] = [
  { label: "Cost:", name: "cost", prefix: "$" },
  { label: "Profit:", name: "profit", prefix: "$" },
  { label: "Selling Price:", name: "sellingPrice", suffix: "$" },
  { label: "Term:", name: "term", suffix: "Months" },
  { label: "Rate:", name: "rate", suffix: "%" },
  { label: "Out Of Pocket:", name: "outOfPocket", prefix: "$" },
  { label: "Tax Rate:", name: "taxRate", suffix: "%" },
];

const FinanceQuote: React.FC<FinanceQuoteProps> = ({
  form,
  handleChange,
  onApply,
}) => {
  return (
    <div className="max-w-lg bg-white border rounded-md shadow-sm">
      {/* Header */}
      <div className="px-4 py-2 bg-gray-50 border-b rounded-t-md">
        <h2 className="font-semibold text-gray-700">Finance Quote</h2>
      </div>

      {/* Form */}
      <form className="p-4 space-y-4" onSubmit={onApply}>
        {fields.map((field) => (
          <div
            key={field.name}
            className="flex items-center justify-between space-x-3"
          >
            <label className="text-sm text-gray-700 w-32">{field.label}</label>
            <div className="relative flex-1">
              {field.prefix && (
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  {field.prefix}
                </span>
              )}
              <input
                type="number"
                name={field.name}
                value={form[field.name]}
                readOnly={field.name === "sellingPrice"}
                onChange={handleChange}
                className={`w-full border rounded-md py-1.5 pr-14 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
                  field.prefix ? "pl-6" : "pl-2"
                }${
                  field.name === "sellingPrice"
                    ? "bg-gray-100 cursor-not-allowed"
                    : ""
                }`}
              />
              {field.suffix && (
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  {field.suffix}
                </span>
              )}
            </div>
          </div>
        ))}

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-black text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-800"
          >
            ✔ Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default FinanceQuote;
