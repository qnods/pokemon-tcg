import { useEffect, useState } from 'react';

interface Card {
    id: number;
    name: string;
    images: {
      small: string;
    }
    set: {
      id: string;
      name: string;
    }
  }

  function CardFinder({searchParam, searchQuery}:{searchParam: string, searchQuery: string}) {
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        if (searchQuery !== '' && searchParam !== '') {
            fetch(`https://api.pokemontcg.io/v2/cards?q=${searchParam}:${searchQuery}`)
              .then(response => response.json())
              .then(data => setCards(data.data));
          } else {
            setCards([]); // clear the cards when the input is empty
          }
    }, [searchParam, searchQuery]); // dependency array includes 'name' so the effect runs whenever 'name' changes

    return (
        <div className='container'>

            <div className="col-span-4">
                <ul className='grid grid-cols-4 gap-4'>
                    {cards.map((card: Card) => (
                    <li key={card.id} className='py-4'>
                        <img src={card?.images?.small} alt={card?.name}/>
                        <p>{card?.id}</p>
                        <p>{card?.set?.name}</p>
                    </li>
                    ))}
                </ul>
            </div>

            
        </div>

    );
  }


export {CardFinder};