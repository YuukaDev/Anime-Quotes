import React, { useState } from "react";
import { Container, Button, Box, Typography } from "@mui/material";

function Quote() {
  const newPage = () =>
    (window.location.href = `https://twitter.com/intent/tweet?text=${quotes.quoteText}`);

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
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        border="3px solid #000"
        minHeight="200px"
        minWidth="500px"
        borderRadius="20px"
        boxShadow="6px 0 20px #333"
        backgroundColor="rgba(0, 0, 0, 0.4)"
      >
        <Box margin="20px" fontSize="2em" color="#fff">
          <Typography className="error">{error}</Typography>
          <Typography>{quotes.animeText}</Typography>
          <Typography>{quotes.quoteText}</Typography>
          <Typography>{quotes.characterText}</Typography>
        </Box>
        <Button className="btn btn-danger" onClick={animeQuote}>
          Generate
        </Button>
        <Button id="tweet" className="btn btn-primary" onClick={newPage}>
          Tweet
        </Button>
      </Box>
    </Container>
  );
}

export default Quote;
