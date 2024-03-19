import {useState, useEffect} from 'react';
import { SetCards } from './SetCards';
import { CardStats } from './CardStats';

  interface CardSet {
    id: number;
    name: string;
    images: {
      symbol: string;
      logo: string;
    }
  }

function SingleSet() {
    const setID:string = 'sv2';
    const [set, setSet] = useState<CardSet | null>(null);

    const grassCount = CardStats({setID});



  

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
              <p>{grassCount}</p>
              <br/>
            </div>
          </div>
          <SetCards setID={setID}/>

        </div>
      );

}

export {SingleSet};