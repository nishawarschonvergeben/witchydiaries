<script>
  import CharaCard from "$lib/components/CharaCard.svelte";
  export let data;
</script>

<div class="container">
  {#each data.characters as character}
  <div class="grid-item">
    <CharaCard {character} />
  </div>
  {/each}
</div>

<style>
  .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px;
  }
</style>

