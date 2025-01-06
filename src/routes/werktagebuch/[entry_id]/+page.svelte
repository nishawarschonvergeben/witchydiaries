<script>
  export let data;
</script>

<button on:click={() => window.location.href='/werktagebuch'} class="custom-button">
  Zurück zum Werktagebuch
  </button>

  <div class="container">
    <div class="mb-4">
      <div class="address">
        <p><strong>Von:</strong> Nisha ❤️ </p>
        <p><strong>Empfänger:</strong> Nisha (maybe Editor Nisha)</p>
        <p><strong>Datum:</strong> {data.entry.date}</p>
      </div>
      <hr />
    </div>
    <div class="mb-3">
      <strong>Time spent:</strong>
      <p>{data.entry.duration}</p>
    </div>
    <div class="mb-3">
      <strong>Location:</strong>
      <p>{data.entry.location}</p>
    </div>
    <div class="mb-3">
      <strong class="text-danger">Heutige Updates:</strong>
      <p>{data.entry.content}</p>
    </div>
    <div class="mb-3">
      <strong>How do I feel:</strong>
      <p>{data.entry.feels}</p>
    </div>
  </div>
  

<style>

  .container {
    padding: 2rem;
    background-color: #fffcf5;
    border-radius: 19px;
    margin: 20px;
  }
  .custom-button {
    color: #ffffff;
    background-color: #ff69b4;
    font-weight: bold; 
    text-decoration: none;
    margin-top: 20px; 
    border-radius: 10px;
  }
  .custom-button:hover {
    background-color: #ff85c2;
  }
</style>
