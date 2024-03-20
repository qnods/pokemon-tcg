import {useState, useEffect} from 'react';

interface CardSet {
    id: number;
    name: string;
    images: {
      symbol: string;
      logo: string;
    }
  }

function SetInfo({ setID }: { setID: string }){
    const [set, setSet] = useState<CardSet | null>(null);

    useEffect(() => {
        fetch(`https://api.pokemontcg.io/v2/sets/${setID}`)
          .then(response => response.json())
          .then(data => setSet(data.data));
      }, [setID]);

    
      return(
        <div className="container p-4 text-white col-span-1 bg-black text-center">
            <h1 className='font-majormonodisplay'>Card Set Info</h1>
            <br />
            <img src={set?.images?.logo} alt={set?.name} className='mx-auto block'/>
            <br />
            <div className="px-4">
                <p className='font-bold'>Set ID</p>
                <p>{set?.id}</p>
                <br/>
                <p className='font-bold'>Set Name</p>
                <p>{set?.name}</p>
                <br/>
                <p className='font-bold'>Set Symbol</p>
                <img src={set?.images?.symbol} className='mx-auto block' />
                <br/>
            </div>
        </div>
      )


}

export {SetInfo};