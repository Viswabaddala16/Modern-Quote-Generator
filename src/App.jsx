import { useEffect, useState } from "react";
import { quotes } from "./data/quotesData";

function App() {
  

   const [randomQuote, setRandomQuote] = useState({
    quote : "Loading Inspiration",
    Author : "Loading..!"
   });
   const[loading,setLoading] = useState(false);
  useEffect(() => {
    fetchQuotes();
  },[]);

  async function fetchQuotes(){
    setLoading(true);
    try{
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      setRandomQuote({quote: data.quote, author: data.author, id: data.id});
    }catch (error){
      console.log("Failed to fetch quote",error);
      generateRandomQuote();
    } finally{
      setLoading(false);
    }
    
  }
  async function generateRandomQuote() {
    const otherQuotes = quotes.filter((quote) => quote.id !== randomQuote.id);
    const randomIndex = Math.floor(Math.random() * otherQuotes.length);
    const nextQuote = otherQuotes[randomIndex];
    setRandomQuote({
      quote: nextQuote.text,
      author: nextQuote.author,
      id: nextQuote.id
    });
  }
  

 

  

  return (
    /* 1. BACKGROUND FIX: h-screen ensures the gradient covers 100% of the visible window always */
    <div className=" w-full bg-linear-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4 overflow-hidden font-sans">
      
      {/* 
          2. CONTAINER FIX: 
          - w-[90%] and max-w-[450px] makes it responsive for mobile and locked for desktop.
          - min-h-[400px] ensures the height doesn't change when text length changes.
          - flex-col justify-between keeps the button at the bottom consistently.
      */}
      <div className="w-[95%] max-w-[450px] min-h-[420px] flex flex-col justify-between bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 md:p-10 shadow-2xl transition-all duration-500">
        
        {/* Quote Content Section */}
        <div className={loading  ? "opacity-50" : "opacity-100"}>
          <div className="text-white/40 text-7xl font-serif leading-none mb-2">“</div>
          <p className="text-white text-2xl md:text-3xl font-semibold leading-snug tracking-tight">
            {randomQuote.quote}
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
            onClick={fetchQuotes}
            disabled={loading}
            className="w-full bg-white text-blue-700 font-bold py-4 px-6 rounded-2xl shadow-xl hover:bg-blue-50 active:scale-95 transition-all duration-200 uppercase tracking-widest text-sm"
          >
            {loading ? "Chasing Wisdom  " : "Get New Quote"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
