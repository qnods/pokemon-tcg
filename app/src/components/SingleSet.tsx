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

  interface CardSet {
    id: number;
    name: string;
    images: {
      symbol: string;
      logo: string;
    }
  }

function SingleSet() {
    const setID = 'sv3pt5';
    const [cards, setCards] = useState<Card[]>([]);
    const [set, setSet] = useState<CardSet | null>(null);
  
    useEffect(() => {
      fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${setID}`)
        .then(response => response.json())
        .then(data => setCards(data.data));
    }, []);

    useEffect(() => {
      fetch(`https://api.pokemontcg.io/v2/sets/${setID}`)
        .then(response => response.json())
        .then(data => setSet(data.data));
    }, []);

    return (
      <div className="container mx-auto p-4 grid grid-cols-5 gap-4">
          <div className="col-span-1 bg-blue-300">
            <h1 className='font-majormonodisplay'>Card Set Info</h1>
            <br />
            <img src={set?.images?.logo} alt={set?.name}/>
            <div className="px-4">
              <p className='font-bold'>Set ID</p>
              <p>{set?.id}</p>
              <br/>
              <p className='font-bold'>Name</p>
              <p>{set?.name}</p>
              <br/>
            </div>
          </div>
          <div className="col-span-4">
            <ul className='grid grid-cols-4 gap-4'>
              {cards.map((card: Card) => (
                <li key={card.id} className='py4'>
                  <img src={card?.images?.small} alt={card?.name}/>
                  <p>{card?.name}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      );

}

export {SingleSet};