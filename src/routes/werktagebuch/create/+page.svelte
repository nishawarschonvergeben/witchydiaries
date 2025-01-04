<script>
  let { form } = $props(); // Das `form`-Objekt kommt aus den Backend-Actions
</script>

<div class="diary-compose-page">
  <a href="/werktagebuch" class="back-link">← Back to Werktagebuch</a>
  <h1>New WERKTAGEBUCH Entry</h1>

  <form method="POST" action="?/create" class="compose-form">
    <!-- Datum -->
    <label for="date">Date</label>
    <input
      type="date"
      id="date"
      name="date"
      class="form-control"
      required
    />

    <!-- Inhalt -->
    <label for="content">Content</label>
    <textarea
      id="content"
      name="content"
      placeholder="Tell a story about how a youngling of a writer, felt about her writing today..."
      class="form-control"
      rows="6"
      required
    ></textarea>

    <!-- Gefühle -->
    <label for="feels">How did you feel?</label>
    <input
      type="text"
      id="feels"
      name="feels"
      placeholder="e.g., Happy, Confused, Excited"
      class="form-control"
    />

    <!-- Ort -->
    <label for="location">Location</label>
    <input
      type="text"
      id="location"
      name="location"
      placeholder="e.g., Home, mit de Girls, Unterwegs"
      class="form-control"
    />

    <!-- Dauer -->
    <label for="duration">Duration</label>
    <input
      type="text"
      id="duration"
      name="duration"
      placeholder="e.g., 2 hours"
      class="form-control"
    />

    <!-- Aktionen -->
    <div class="actions">
      <button type="submit" class="btn btn-primary">Save Entry</button>
    </div>
  </form>

  {#if form?.success}
  <p class="success-message">Diary entry created successfully!</p>
  {/if}
</div>

<style>

  .diary-compose-page {
    width: 1000px;
    margin: 0 auto;
    padding: 24px;
  }

  .actions {
    margin-top: 24px;
  }

  .success-message {
    margin-top: 12px;
    color: rgb(0, 0, 0)een;
    font-weight: bold;
  }

</style>
