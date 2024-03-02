import {useState, useEffect} from 'react';

interface Card {
    id: number;
    name: string;
    images: {
      small: string;
    }
    }

function SingleSet() {
    const [cards, setCards] = useState<Card[]>([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setCards(data));
    }, []);

    return (
        <div>
          <h2>All Users</h2>
          <ul>
            {cards.map((user: Card) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      );

}

export {SingleSet};