import { useEffect, useState } from 'react';
import { PokemonCard } from './types/PokemonCard';


function PokemonFetcher() {
    const [pokemonCard, setPokemonCard] = useState<PokemonCard | null>(null);
  
    useEffect(() => {
      fetch('https://api.pokemontcg.io/v2/cards/sv3-176')
        .then(response => response.json())
        .then(data => setPokemonCard(data.data));
    }, []);
  
    return pokemonCard;
  }

export { PokemonFetcher };