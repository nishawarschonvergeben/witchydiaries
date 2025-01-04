<script>
  export let data;
</script>

<div class="container">
  <header class="idea-header">
    <h1>{data.idea.title}</h1>
    <p class="draft-status">Chapter: <strong>{data.idea.chapter}</strong></p>
  </header>

  <form class="mt-3" method="POST" action="?/update">
    <input type="hidden" name="_id" value={data.idea._id} /> <!-- hidden input field, damit es ideas erkennt ahhand vo _id -->
    <div class="row">
      <div class="lg-3">
        <label class="form-label" for="tag">TAG</label>
        <input name="tag" bind:value={data.idea.tag} class="form-control" type="text" />
      </div>
      <div class="lg-3">
        <label class="form-label" for="setting">Setting</label>
        <textarea name="setting" bind:value={data.idea.setting} class="form-control" rows="6"> </textarea>
      </div>
      <div class="lg-3">
        <label class="form-label" for="plot">Plot</label>
     <textarea name="plot" bind:value={data.idea.plot} class="form-control" rows="6"></textarea>
      </div>
      <div class="lg-3">
        <label class="form-label" for="conflict">Conflict</label>
        <textarea name="conflict" bind:value={data.idea.conflict} class="form-control" rows="4"></textarea>
      </div>
      <div class="lg-3">
        <label class="form-label" for="character_growth">Character Development</label>
        <textarea name="character_growth" bind:value={data.idea.character_growth} class="form-control" rows="4"></textarea>
      </div>
      <div class="lg-3">
        <button type="submit" class="btn btn-primary">Update</button>
      </div>
    </div>
  </form>
</div>


<style>
  .container {
  display: grid;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 19px;
    margin: 20px;
  }

  .idea-header {
text-align: center;
margin-right: 1rem;

  }

  .draft-status {
    font-size: 1rem;
    color: #555;
  }

  .form-label {
    font-weight: bold;
  }

  .form-control {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .btn-primary {
    background-color: #007BFF;
    border: none;
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }

  .btn-primary:hover {
    background-color: #0056b3;
  }
</style>