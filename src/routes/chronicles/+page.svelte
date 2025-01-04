<script>
  export let data
 </script>
 
 <div class="count-box">
  <p>Total Chronicles: {data.count}</p>
</div>
   
   <div class="chronicles-page">
     <h1>Chronicles</h1>
     <div class="chronicles-list">
       {#each data.chronicles as chronicle}
         <div class="chronicle-item">
           <p><strong>{chronicle.title}</strong></p>
           <h2>{chronicle.status}</h2>
         </div>
       {/each}
     </div>
   </div>
   
   <style>
     .chronicles-page {
       padding: 16px;
     }
     .chronicles-list {
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
       gap: 16px;
     }
     .chronicle-item {
       border: 1px solid #ddd;
       padding: 16px;
       border-radius: 8px;
       background-color: #f8f9fa;
       box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
     }

     .count-box {
      width: 400px;
       color: #321138;
       font-weight: bold;
       padding: 20px;
       margin-top: 20px;
       font-size: 40px;
      font-style: oblique;
     }
   </style>

 
