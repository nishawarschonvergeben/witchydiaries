<script>
    export let data;
    let character = data.character;
    import CharaCard from "$lib/components/CharaCard.svelte";
    console.log ("Chara", character);
  </script>

<div class="character-detail">
  <!-- Charakterbild -->
  <img src={character.image} alt="{character.name}" class="character-image" />

  <!-- Charaktername -->
  <div class="character-header">
    <h1>{character.name}</h1>
    <p>{character.role}</p>
    <p>{character.description}</p>
  </div>



  <!-- Zurück-Link -->
  <a href="/characters" class="back-link">← Zurück zur Übersicht</a>
</div>



  
  <style>
    .character-detail {
      display: flex;
      flex-direction: column;

      padding: 16px;
    }
  
    .character-header {
      margin-bottom: 24px;
    }
  
    .character-image {
      max-width: 300px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      margin-bottom: 16px;
    }

  
    .back-link {
      margin-top: 24px;
      text-decoration: none;
      color: #8B008B;
      font-weight: bold;
    }

  </style>

<aside class="info-box">
  <h3>Potential Ideas:</h3>
  <ul>
    {#each character.potentialIdeas as idea}
      <li>{idea.title}: {idea.content}</li>
    {/each}
  </ul>
</aside>
