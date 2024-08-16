<script lang="ts">
    // Define the interface for the game objects
    interface Game {
      id: string;
      name: string;
      // Add other properties that a game might have
    }
  
    // Declare the games variable with the correct type
    let games: Game[] = [];
  
    // Fetch data from the backend when the component is mounted
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/games');
        if (!response.ok) {
          throw new Error('Failed to fetch games');
        }
        games = await response.json();
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };
  
    // Call the fetchGames function when the component mounts
    fetchGames();
  </script>
  
  <main>
    <h1>Game List</h1>
    <ul>
      {#each games as game}
        <li>{game.name}</li>
      {/each}
    </ul>
  </main>
  
  <style>
    /* Add your styles here */
  </style>
  