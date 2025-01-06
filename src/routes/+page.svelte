<script>
    import { fly } from "svelte/transition";
  </script>
  
  <div class="container">
    <div class="title-container">
      <h1 in:fly="{{ x: -200, duration: 500 }}" class="title">Reverie</h1>
      <p in:fly="{{ x: 200, duration: 500, delay: 250 }}" class="subtitle">Writing Journey</p>
    </div>
  </div>
  
  <style>
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
    }
    .title-container {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .title {
      font-size: 60px;
      font-weight: bold;
      margin: 0;
    }
  </style>
  