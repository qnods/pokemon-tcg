import {useState, useEffect} from 'react';

interface Card {
    id: number;
    name: string;
    images: {
      small: string;
    }
    set: {
      id: string;
    }
  }

function SingleSet() {
    const [cards, setCards] = useState<Card[]>([]);
  
    useEffect(() => {
      fetch('https://api.pokemontcg.io/v2/cards?q=set.id:sv3pt5')
        .then(response => response.json())
        .then(data => setCards(data.data));
    }, []);

    return (
      <div className="container mx-auto px-4 grid grid-cols-5 gap-4">
          <div className="col-span-1 bg-blue-300">
            Test Sidebar
          </div>
          <div className="col-span-1 bg-red-300"></div>
          <ul className='grid grid-cols-5 gap-4'>
            {cards.map((card: Card) => (
              <li key={card.id} className='py4'>
                <img src={card?.images?.small} alt={card?.name}/>
                <p>Set ID: {card?.set?.id}</p>
              </li>
            ))}
          </ul>
        </div>
      );

}

export {SingleSet};