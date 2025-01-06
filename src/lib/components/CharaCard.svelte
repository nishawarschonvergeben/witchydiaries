<script>
  let { character } = $props();
</script>

<a href={`/characters/${character.name}`} class="character-card-link">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{character.name}</h5>
      <p class="card-text">{character.role}</p>
      <img src={character.image} class="card-img-top" alt="..." />
    </div>
  </div>
</a>

<style>
  .card {
    margin: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .card-img-top {
    height: 9rem; 
    object-fit: cover; 
  }

  .character-card-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }
</style>
