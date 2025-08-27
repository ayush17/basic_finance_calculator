import React from "react";

interface Quote {
  _id: string;
  name: string;
  payment: number;
  outOfPocket: number;
}

interface SavedQuotesProps {
  quotes: Quote[];
  onDelete: (id: string) => void; // ✅ string
  onView: (id: string) => void; // ✅ string
}

const SavedQuotes: React.FC<SavedQuotesProps> = ({
  quotes,
  onDelete,
  onView,
}) => {
  console.log("These are quotes", quotes);
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
                  Payment:{" "}
                  <span className="font-bold">${q.payment.toFixed(2)}</span>{" "}
                  &nbsp; Out of Pocket:{" "}
                  <span className="font-bold">${q.outOfPocket.toFixed(2)}</span>
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => onView(q._id)}
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
    </div>
  );
};

export default SavedQuotes;
