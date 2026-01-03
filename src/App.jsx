import { useCallback, useEffect, useState } from "react";
import { quotes } from "./data/quotesData";

function App() {
  

   const [randomQuote, setRandomQuote] = useState({
    quote : "Loading Inspiration",
    author : "Loading..!",
    id : null
   });
   const[loading,setLoading] = useState(false);

   const getLocalQuote = useCallback(() => {
    const otherQuotes = quotes.filter((quote) => quote.id !== randomQuote.id);
    const randomIndex = Math.floor(Math.random() * otherQuotes.length);
    const nextQuote = otherQuotes[randomIndex];
    setRandomQuote({
      quote: nextQuote.text,
      author: nextQuote.author,
      id: nextQuote.id
    });
  },[randomQuote.id]);
 

  const fetchQuotes = useCallback(async () =>{

    setLoading(true);
    try{
      const response = await fetch("https://dummyjson.com/quotes/random");
      if(!response.ok)  throw new Error("API Limit is reached")
      const data = await response.json();
      setRandomQuote({quote: data.quote, author: data.author, id: data.id});
    }
    catch (error){
      console.log("Fetching is failed,using the local data",error);
      getLocalQuote();
    } finally{
      setLoading(false);
    }
    
  },[getLocalQuote]);
  useEffect(() => {
    fetchQuotes()
  },[]);
  
  

 
  return (
    <main className="bg-white/90 transiton-full backdrop-blur-sm p-8 border w-full shadow-xl rounded-2xl ">
      <figure className="mb-6">
        
          <span className="text-6xl leading-none text-green-500 font-serif">“</span>
          <blockquote className="text-xl font-medium px-4 italic text-gray-500">{randomQuote.quote}</blockquote>
          <figcaption className="text-right text-gray-600 font-semibold mt-4">
            --{randomQuote.author}
          </figcaption>
      </figure>

      <button 
      disabled={loading}
      className="w-full border px-2 py-3 rounded-lg transition-transform active:scale-95 disabled:opacity-50  text-white bg-green-500  hover:bg-green-600 cursor-pointer mb-3 " 
      onClick={fetchQuotes}
      
      >
        {loading ? "Chasing Wisdom.." : "Get New Quote"}
      </button>
    </main>
  );
}

export default App;
