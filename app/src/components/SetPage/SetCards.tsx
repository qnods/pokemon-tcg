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
    subtypes: string[];
  }

  function SetCards({ setID }: { setID: string }) {
    const [cards, setCards] = useState<Card[]>([]);
  
    useEffect(() => {
      fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${setID}&&name:Hoppip`)
        .then(response => response.json())
        .then(data => setCards(data.data));
    }, [setID]);


    return (
        <div className="col-span-4">
            <ul className='grid grid-cols-4 gap-4'>
                {cards.map((card: Card) => (
                <li key={card.id} className='py4'>
                    <img src={card?.images?.small} alt={card?.name}/>
                    <p>{card?.name}</p>
                    <p>{card?.types}</p>
                    <p>{card?.rarity}</p>
                    <p>{card?.subtypes}</p>
                </li>
                ))}
            </ul>
        </div>
    );
  }


export {SetCards};