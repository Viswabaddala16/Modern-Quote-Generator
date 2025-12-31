import { useState } from "react";

function App() {
  const quotes = [
    { id: 1, text: "Every day is a chance to improve", author: "Ramji" },
    { id: 2, text: "Take everything as a challenge", author: "Jai Raj" },
    { id: 3, text: "All is well", author: "Rishi Raj" },
    { id: 4, text: "Color is colorful", author: "Jai Ganesh" },
    { id: 5, text: "Logic will get you from A to B. Imagination will take you everywhere.", author: "Albert Einstein" }
  ];

  const [randomQuote, setRandomQuote] = useState(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  });

  function generateRandomQuote() {
    const otherQuotes = quotes.filter((quote) => quote.id !== randomQuote.id);
    const randomIndex = Math.floor(Math.random() * otherQuotes.length);
    const nextQuote = otherQuotes[randomIndex];
    setRandomQuote(nextQuote);
  }

  return (
    /* 1. BACKGROUND FIX: h-screen ensures the gradient covers 100% of the visible window always */
    <div className="h-screen w-full bg-linear-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4 overflow-hidden font-sans">
      
      {/* 
          2. CONTAINER FIX: 
          - w-[90%] and max-w-[450px] makes it responsive for mobile and locked for desktop.
          - min-h-[400px] ensures the height doesn't change when text length changes.
          - flex-col justify-between keeps the button at the bottom consistently.
      */}
      <div className="w-[95%] max-w-[450px] min-h-[420px] flex flex-col justify-between bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 md:p-10 shadow-2xl transition-all duration-500">
        
        {/* Quote Content Section */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-white/40 text-7xl font-serif leading-none mb-2">“</div>
          <p className="text-white text-2xl md:text-3xl font-semibold leading-snug tracking-tight">
            {randomQuote.text}
          </p>
        </div>

        {/* Bottom Section (Author + Button) */}
        <div className="mt-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-white/50"></div>
            <p className="text-white/90 text-xl font-medium italic">
              {randomQuote.author}
            </p>
          </div>

          <button
            onClick={generateRandomQuote}
            className="w-full bg-white text-blue-700 font-bold py-4 px-6 rounded-2xl shadow-xl hover:bg-blue-50 active:scale-95 transition-all duration-200 uppercase tracking-widest text-sm"
          >
            Get New Quote
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
