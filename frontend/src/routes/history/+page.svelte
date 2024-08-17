<script lang="ts">
    // Fetch or mock the history data here

    // Define the interface for the game objects
    interface Game {
        id: string;
        date: string;
        players: string[];  // Array of player names
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
    <h1>Game History</h1>
    <ul>
        {#each games as game}
            <li>
                <strong>Game ID:</strong> {game.id} <br>
                <strong>Date:</strong> {game.date} <br>
                <strong>Players:</strong> 
                <ul>
                    {#each game.players as player}
                        <li>{player}</li>
                    {/each}
                </ul>
            </li>
        {/each}
    </ul>
</main>
  
<style>
    /* Specific styles for the history page */
    main {
        padding: 20px;
    }
    
    h1 {
        margin-bottom: 20px;
    }
    
    ul {
        list-style-type: none;
        padding-left: 0;
    }
    
    li {
        margin-bottom: 10px;
    }
</style>
  