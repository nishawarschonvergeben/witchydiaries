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

margin: 10px; /* Remove extra margin, handled by gap */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
border-radius: 8px; /* Rounded corners */
}



  .card-img-top {
    height: 9rem; /* Feste Höhe */
    object-fit: cover; /* Bild skalieren */
  }

  .character-card-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }

</style>
