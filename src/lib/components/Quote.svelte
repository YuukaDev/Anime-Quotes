<script>
  let objectValue = {
    anime: "",
    character: "",
    quote: "",
  };
  const fetchApi = async () => {
    const res = await fetch("https://animechan.vercel.app/api/random");
    const data = await res.json();
    objectValue = data;
  };

  $: fetchApi();
</script>

<div class="quote-container">
  <h1>Anime - {objectValue.anime}</h1>
  <h1>Character - {objectValue.character}</h1>
  <h1>Quote - {objectValue.quote}</h1>
</div>
<div class="button-container">
  <button on:click={fetchApi}>Click Me</button>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  .quote-container {
    border: 3px solid #000;
    min-height: 200px;
    width: 700px;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 20px;
    box-shadow: 6px 0 20px #333;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Lato", sans-serif;
  }

  .quote-container h1 {
    color: #fff;
    font-size: 1.3em;
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .button-container button {
    background-color: crimson;
    outline: none;
    border-radius: 8px;
    cursor: pointer;
    color: #fff;
    padding: 15px 20px;
    font-size: 1.3em;
    border: 2px solid crimson;
    transition: 0.3s all ease;
  }
  .button-container button:hover {
    background-color: transparent;
    border: 2px solid crimson;
    outline: none;
    border-radius: 8px;
    cursor: pointer;
    color: #fff;
    padding: 15px 20px;
    font-size: 1.3em;
    transition: 0.3s all ease;
  }
</style>
