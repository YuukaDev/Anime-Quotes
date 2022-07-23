<script>
  import Header from "./lib/components/Header.svelte";
  import Quote from "./lib/components/Quote.svelte";
</script>

<main class="main-container">
  <Header />
  <Quote />
</main>

<style>
  .main-container {
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
      url("./assets/background.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>

