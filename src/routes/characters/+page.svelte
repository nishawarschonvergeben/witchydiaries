<script>
  import CharaCard from "$lib/components/CharaCard.svelte";
  export let data;
</script>


<div class = "body" >

<div class="container">
  {#each data.characters as character}
  <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
    <CharaCard {character} />
  </div>
  {/each}
</div>

</div>


<style>
  .container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Drei Spalten */
  gap: 20px;
  margin: 20px;
  
}
</style>

