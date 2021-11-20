import React, { useState } from "react";

function Quote() {
  const newPage = () => (window.location.href = `https://twitter.com/intent/tweet?text=${quotes.quoteText}`);
  
  const [error, setError] = useState("");
  const [quotes, setQuotes] = useState({
    animeText: "",
    quoteText: "",
    characterText: "",
  });
  const animeQuote = async () => {
    try {
      const res = await fetch("https://animechan.vercel.app/api/random");
      const random = await res.json();

      setQuotes({
        animeText: `Anime - ${random.anime}`,
        quoteText: `Quote - ${random.quote}`,
        characterText: `Character - ${random.character}`,
      });
    } catch (err) {
      setError("Something went wrong");
    }
  };
  return (
    <main>
      <div className="results-container">
        <div className="title-container">
          <h3 className="error">{error}</h3>
          <p>{quotes.animeText}</p>
          <p>{quotes.quoteText}</p>
          <p>{quotes.characterText}</p>
        </div>
        <button className="btn btn-danger" onClick={animeQuote}>
          Generate
        </button>
        <button id="tweet" className="btn btn-primary" onClick={newPage}>
          Tweet
        </button>
      </div>
    </main>
  );
}

export default Quote;
