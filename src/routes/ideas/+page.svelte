<script>
  export let data;
  import { fly } from 'svelte/transition';
</script>

<div class="entry-card new-entry-box">
  <a href="/ideas/create" class="add-entry-link"> New Entry</a>
</div>

<div class="container">
  <div class="row gx-3 gy-3">
    {#each data.ideas as idea}
      <div class="col-sm-12 col-md-12 col-lg-4">
        <div class="entry-card">
          <h2>{idea.title}</h2>
          <p>{idea.chapter}</p>
          <div class="befehle">
            <form method="GET" action={`/ideas/${idea._id}`}>
              <button type="submit" class="btn btn-primary">Learn MORE</button>
            </form>
            <form method="POST" action="?/delete">
              <input type="hidden" name="id" value={idea._id} />
              <button type="submit" class="btn btn-danger">Delete it</button>
            </form>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .befehle {
    display: flex;
    justify-content: space-between;
  }
  .entry-card {
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    border-radius: 8px;
    overflow: hidden;
    min-height: 190px;
    max-height: 190px;
  }
  .new-entry-box {
    display: flex;
    justify-content: center;
    background-color: rgb(218, 137, 218);
    color: #c461d7;
    border: 2px dashed #efcfff;
    min-height: 30px;
    margin-top: 20px;
  }
  .add-entry-link {
    text-decoration: none;
    font-size: 18px;
    color: #ffffff;
    width: 100%;
    text-align: center;
  }
</style>
