import React, { useState } from "react";

function Quote() {
  const [animeText, setAnimeText] = useState("");
  const [quoteText, setQuoteText] = useState("");
  const [characterText, setCharacterText] = useState("");

  const animeQuote = async () => {
    const res = await fetch("https://animechan.vercel.app/api/random");
    const random = await res.json();

    setAnimeText(`Anime - ${random.anime}`);
    setQuoteText(`Quote - ${random.quote}`);
    setCharacterText(`Character - ${random.character}`);
  };
  return (
    <main>
      <div className="results-container">
        <div className="title-container">
          <p>{animeText}</p>
          <p>{quoteText}</p>
          <p>{characterText}</p>
        </div>
        <center>
          <button className="btn btn-outline-danger" onClick={animeQuote}>
            Generate
          </button>
        </center>
      </div>
    </main>
  );
}

export default Quote;
