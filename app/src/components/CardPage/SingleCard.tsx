import { useState, useEffect } from 'react';

interface Card {
  id: number;
  name: string;
  images: {
    small: string;
  }
}

function SingleCard() {
    const [cardId, setCardId] = useState<string>('');
    const [card, setCard] = useState<Card | null>(null);
  
    useEffect(() => {
      fetch(`https://api.pokemontcg.io/v2/cards/${cardId}`)
        .then(response => response.json())
        .then(data => setCard(data.data));
    }, [cardId]); // cardId is a dependency
  
    const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCardId(event.target.value);
    };

    return (
      <div className="container mx-auto p-4">
          <input type="text" value={cardId} onChange={handleIdChange} placeholder="Enter ID" />
          {cardId === '' || card === null ? <div>Loading...</div> : <div>{card?.name}</div>}
          {cardId === '' || card === null ? <div>Loading...</div> : <img src={card?.images?.small} alt={card?.name} />}
        </div>
      );
}
export {SingleCard};
