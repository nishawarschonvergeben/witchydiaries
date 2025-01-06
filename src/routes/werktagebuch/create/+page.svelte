<script>
  let { form } = $props();
</script>

<button
  on:click={() => (window.location.href = "/werktagebuch")}
  class="custom-button"
>
  Zurück zum Werktagebuch
</button>

<div class="container diary-erstell-page">
  <h1 class="mb-4">Neuer Werktagebuch Eintrag...</h1>
  <hr />

  <form method="POST" action="?/create" class="row g-4">
    <div class="col-12">
      <label for="date" class="form-label">Date</label>
      <input type="date" id="date" name="date" class="form-control" required />
    </div>

    <div class="col-12">
      <label for="content" class="form-label">Content</label>
      <textarea
        id="content"
        name="content"
        placeholder="Tell a story about how a youngling of a writer felt about her writing today..."
        class="form-control"
        rows="6"
        required
      ></textarea>
    </div>

    <div class="col-md-6">
      <label for="feels" class="form-label">How did you feel?</label>
      <input
        type="text"
        id="feels"
        name="feels"
        placeholder="e.g., Happy, Confused, Excited"
        class="form-control"
      />
    </div>

    <div class="col-md-6">
      <label for="location" class="form-label">Location</label>
      <input
        type="text"
        id="location"
        name="location"
        placeholder="e.g., Home, mit de Girls, Unterwegs"
        class="form-control"
      />
    </div>

    <div class="col-12">
      <label for="duration" class="form-label">Duration</label>
      <input
        type="text"
        id="duration"
        name="duration"
        placeholder="e.g., 2 hours"
        class="form-control"
      />
    </div>

    <div class="action">
      <button type="submit" class="btn btn-dark">Save Entry</button>
    </div>
  </form>

  {#if form?.success}
    <p class="alert alert-dark mt-4">Diary entry created successfully!</p>
  {/if}
</div>

<style>
  .diary-erstell-page {
    padding: 24px;
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .custom-button {
    color: #ffffff;
    background-color: #ff69b4;
    font-weight: bold;
    text-decoration: none;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
  }
  .custom-button:hover {
    background-color: #ff85c2;
  }
</style>
