<script>
  let { form } = $props(); // Das `form`-Objekt kommt aus den Backend-Actions
</script>

<div class="idea-compose-page">
  <a href="/ideas" class="back-link">← Back to Ideas</a>
  <h1>New Idea:</h1>

  <form method="POST" action="?/create" class="compose-form">
    <label for="title">TITEL</label>
    <input
      type="title"
      id="title"
      name="title"
      class="form-control"
      maxlength="25"
      required
    />
    <div class="col-12">
    <label for="feels">TAG</label>
    <input type="text" id="tag" name="tag" class="form-control" />
  </div>

  <div class="col-12">
    <label for="content">chapter</label>
    <textarea id="chapter" name="chapter" class="form-control" required
    ></textarea>
  </div>
    <div class="col-12">
    <label for="content">setting</label>
    <textarea id="setting" name="setting" class="form-control" rows="4" required
    ></textarea>
  </div>
    <div class="col-12">
    <label for="content">plot</label>
    <textarea id="plot" name="plot" class="form-control" rows="4" required
    ></textarea>
  </div>
    <div class="col-12">
    <label for="content">conflict</label>
    <textarea id="conflict" name="conflict" class="form-control" required
    ></textarea>
  </div>
    <div class="col-12">
    <label for="content">character growth</label>
    <textarea
      id="character_growth"
      name="character_growth"
      class="form-control"
      required
    ></textarea>
  </div>

    <div class="actions">
      <button type="submit" class="btn btn-primary">Save Entry</button>
    </div>
  </form>
</div>
  {#if form?.success}
    <p class="success-message">New Idea created successfully!</p>
  {/if}

<style>
  .idea-compose-page {
    margin: 10;
    padding: 24px;
    margin-top: 20px;
  }

  .actions {
    margin-top: 24px;
  }

  .success-message {
    margin-top: 12px;
    color: rgb(0, 0, 0) een;
    font-weight: bold;
  }
</style>
