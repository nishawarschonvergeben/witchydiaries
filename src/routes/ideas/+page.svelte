<script>
  export let data // (alti methode --> let { data } = $props(); // alles vo load wird in data gspeicheret 
</script>

<div class="new-entry-box">
  <a href="/ideas/create" class="add-entry-link"> New Entry</a>
</div>

<div class="grid">
  {#each data.ideas as idea}
    <div class="idea-card">
      <h2>{idea.title}</h2>
      <p>{idea.chapter}</p>
      <div class="befehle" col-sm-5>
          <form method="GET" action={`/ideas/${idea._id}`}>
            <button type="submit" class="btn btn-primary btn-block">Learn MORE</button> 
          </form>
          <form method="POST" action="?/delete">
            <input type="hidden" name="id" value={idea._id} />
            <button type="submit" class="btn btn-danger btn-block">Delete it</button>
          </form>
        </div>
      </div>
  {/each}
</div>




<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Spalten passen sich an */
    gap: 20px;
    margin-top: 20px;
  }
  .idea-card {
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
 
  .befehle {
    display: flex;
    justify-content: space-between; /* Buttons nebeneinander */
  }
.new-entry-box {
    background-color: rgb(218, 137, 218); /* Heller blaugrüner Hintergrund */
    border: 2px dashed #efcfff; /* Gestrichelter Rand */
    color: #c461d7;
    font-weight: bold;
    padding: 20px;
    margin-top: 20px;
  
  }
</style>
