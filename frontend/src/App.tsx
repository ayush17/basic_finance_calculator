import React, { useEffect, useState } from "react";
import QuoteForm from "./components/QuoteForm";
import QuoteList from "./components/QuoteList";
import { getQuotes } from "./api/quotes";
import type { Quote } from "./types/Quote";

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getQuotes();
      setQuotes(data);
    })();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 space-y-8">
      <QuoteForm />
    </div>
  );
}

export default App;
