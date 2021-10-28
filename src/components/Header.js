import React from "react";

function Header() {
    const spanStyle = {
        color: 'red'
    }
  return (
      <div className="header-container">
          <h1>Anime <span style={spanStyle}>Quotes</span></h1>
          <p>Click On The Button To Generate Random Anime Quote</p>
      </div>
  );
}

export default Header;

/*
<!DOCTYPE html>
<html lang="en">

<head> 
<meta charset="UTF-8"> 
<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<title>Anime Quotes
</title> 

<link rel="stylesheet" href="/style/style.css"> 

<link rel="icon" href="img/pfp.jpg"> 

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> 
<script src="https://kit.fontawesome.com/788a428acc.js" crossorigin="anonymous">
</script>
</head>

<body class="d-flex flex-column min-vh-100 justify-content-center align-items-center bg-transparent"> 

<div id="particles-js">
</div>

<header> 

<div class="header-container"> 
<br>
<br><h1>Anime 

<span style="color: red">Quotes
</span></h1> 
</div></header> <main> 

<div class="title-container"> 

<p>Click On The Button To Generate Random Anime Quote</p>

<div class="results-container"> 

<p id="anime" class="anime"></p>

<p id="quote" class="quote"></p>

<p id="character" class="character"></p>
</div>
<br><center><button class="btn btn-outline-danger">Generate</button></center> </main>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
</script>
<script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js">
</script>
<script src="/js/main.js">
</script>
</body>
</html>
*/