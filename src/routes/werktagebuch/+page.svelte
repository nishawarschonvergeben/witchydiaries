<script>
  export let data;
</script>

<div class="entry-card new-entry-box">
  <a href="/werktagebuch/create" class="add-entry-link">New Entry</a>
</div>

<div class="container">
  <div class="row gx-3 gy-3">
    {#each data.entries as entry}
      <div class="col-sm-6 col-md-4 col-lg-2">
        <div class="entry-card">
          <h3>{entry.date}</h3>
          <a href={`/werktagebuch/${entry._id}`}>View Entry</a>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>

  .entry-card {
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  .new-entry-box {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f5e8f7;
    background-color: rgb(218, 137, 218);
    border: 2px dashed #efcfff;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .add-entry-link {
    text-decoration: none;
    font-size: 18px;
    color: #ffffff;
    width: 100%;
    text-align: center;
  }
</style>
