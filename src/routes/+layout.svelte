<script>
    import "./styles.css";
  let { children } = $props();
</script>

<nav class="navbar navbar-expand-lg" style="background-color: #E4D3F4;">  
  <div class="container-fluid">
    <a class="navbar-brand" href="/">˙ǝıɹǝʌǝɹ</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/chronicles">Chronicles</a>
        <a class="nav-link active" aria-current="page"  href="/characters">Characters</a>
        <a class="nav-link active" aria-current="page"  href="/ideas">Ideas</a>
        <a class="nav-link active" aria-current="page" href="/werktagebuch">werktagebuch.</a>
      </div>
    </div>
  </div>
</nav>


  <div class="container">
      {@render children()} 
  </div>


 
