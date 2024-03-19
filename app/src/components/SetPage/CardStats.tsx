import { useEffect, useState } from 'react';

interface Card {
    id: number;
    name: string;
    images: {
      small: string;
    }
    set: {
      id: string;
    }
    types: string[];
    rarity: string;
  }

function CardStats({ setID }: { setID: string }) {
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
      fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${setID} types:grass (rarity:rare)`)
        .then(response => response.json())
        .then(data => setCards(data.data));
    }, [setID]);
  
    const grassCount = cards.length
    return grassCount;
}

export { CardStats };