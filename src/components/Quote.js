import React, { useState } from "react";

function Quote() {
  const newPage = () =>
    (window.location.href = `https://twitter.com/intent/tweet?text=${quoteText}`);

  const [animeText, setAnimeText] = useState("");
  const [quoteText, setQuoteText] = useState("");
  const [characterText, setCharacterText] = useState("");
  const [error, setError] = useState("");

  const animeQuote = async () => {
    try {
      const res = await fetch("https://animechan.vercel.app/api/random");
      const random = await res.json();

      setAnimeText(`Anime - ${random.anime}`);
      setQuoteText(`Quote - ${random.quote}`);
      setCharacterText(`Character - ${random.character}`);
    } catch (err) {
      setError("Something went wrong");
    }
  };
  return (
    <main>
      <div className="results-container">
        <div className="title-container">
          <h3 className="error">{error}</h3>
          <p>{animeText}</p>
          <p>{quoteText}</p>
          <p>{characterText}</p>
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
