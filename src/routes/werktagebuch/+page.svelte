<script>
  export let data // (alti methode --> let { data } = $props(); // alles vo load wird in data gspeicheret 
</script>

<div class="entry-card new-entry-box">
  <a href="/werktagebuch/create" class="add-entry-link">+ New Entry</a>
</div>

<div class="grid">
  {#each data.entries as entry}
    <div class="entry-card">
      <h3>{entry.date}</h3>
      <a href={`/werktagebuch/${entry._id}`}>View Entry</a>
    </div>
  {/each}
</div>




<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Drei Spalten */
    gap: 20px;
    border-radius: 8px;
    margin-top: 20px;
  }
  .entry-card {
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    margin-top: 20px;
  }
  /* Styling für die New Entry Box */
  .new-entry-box {
    background-color: rgb(218, 137, 218); /* Heller blaugrüner Hintergrund */
    border: 2px dashed #efcfff; /* Gestrichelter Rand */
    color: #c461d7;
    font-weight: bold;
  
  }

  /* Styling für den Link in der New Entry Box */
  .add-entry-link {
    text-decoration: none;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }


</style>


