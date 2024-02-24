import React, { useEffect, useState } from 'react';

interface PokemonCard {
  id: string;
  name: string;
  // Add other properties as needed
}

function App() {
  const [pokemonCard, setPokemonCard] = useState<PokemonCard | null>(null);

  useEffect(() => {
    fetch('https://api.pokemontcg.io/v2/cards/base1-4')
      .then(response => response.json())
      .then(data => setPokemonCard(data.data));
  }, []);

  return (
    <div className="App">
      {pokemonCard ? (
        <div>
          <h1>{pokemonCard.name}</h1>
          <img src={pokemonCard.images.small} alt={pokemonCard.name} />
          {/* Display other properties of the card as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;