<script>
   export let data
  </script>

<a href="/werktagebuch" class="back-link">← Zurück zu werktagebuch</a>

<div class="diary-entry">
  <!-- Briefkopf -->
  <div class="header">
    <div class="address">
      <p>Von: Nisha</p>
      <p>Empfänger: Nisha (maybe Editor Nisha)</p>
      <p>Datum: {data.entry.date}</p>
    </div>
    <hr />
  </div>

   <!-- Eintragstext -->
   <div class="entry-content-extra">
  Time spent:
    <p>{data.entry.duration}</p>
</div>

     <!-- Eintragstext -->
     <div class="entry-content-extra">
        Location:<br/>
        <p>{data.entry.location}</p>
    </div>

  <!-- Begrüßung -->
  <div class="mb-3">
    <p>Heutige Updates:</p>
  </div>

  <!-- Eintragstext -->
  <div class="entry-content">
      Hier sind einige Gedanken:<br/>
      <p>{data.entry.content}</p>
  </div>

   <!-- Feels -->
   <div class="entry-content-extra">
    How do I feel:<br/>
    <p>{data.entry.feels}</p>
</div>

 

</div>

<style>
  .diary-entry {
   width: 1200px;
    margin: 0 auto;
    padding: 24px;
    background: #fffbe6; /* Cremefarbener Hintergrund für den Papierlook */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    line-height: 1.6;
  }

  .entry-content-extra {
    font-size: 18px;
    color: #b65a69;
    padding-bottom: 24px;
    border-radius: 16px;

  }

  .header {
    margin-bottom: 24px;
  }

  .address {
    font-size: 14px;
    color: #555;
  }
  .mb-3 {
    font-size: 21px;
    font-weight: bold;
    color: #8B008B; /* Dunkles Magenta für den Text */
  }

  .entry-content {
    font-size: 18px;
    color: #333;
    padding-bottom: 24px;
  }

  .back-link {
    display: inline-block;
    margin-top: 24px;
    text-decoration: none;
    color: #8B008B;
    font-weight: bold;
  }
</style>
