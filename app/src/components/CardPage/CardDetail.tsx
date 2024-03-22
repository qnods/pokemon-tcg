import { useState, useEffect } from 'react';
import { Card } from './CardType';


function CardDetail({cardId}: {cardId: string}) {
    const [card, setCard] = useState<Card | null>(null);

    useEffect(() => {
        fetch(`https://api.pokemontcg.io/v2/cards/${cardId}`)
          .then(response => response.json())
          .then(data => setCard(data.data));
      }, [cardId]);
    
    return (
        <div className="container mx-auto p-4 grid grid-cols-5 gap-4">
            <div className="container p-4 text-white col-span-1 bg-black text-center">
                <h1 className='font-majormonodisplay text-l'>Card Image</h1><br/>
                {cardId === '' || card === null ? <p>Loading...</p> : <img src={card?.images?.large} alt={card?.name} className='mx-auto block' />}
            </div>
            <div className="container p-4 text-white col-span-2 bg-black text-center">
                <h1 className='font-majormonodisplay text-l'>Card Detail</h1><br/>
                <p className='font-bold'>Card ID</p>
                {cardId === '' || card === null ? <p>Loading...</p> : <p>{card?.id}</p>}
                <br/>
                <p className='font-bold'>Card Name</p>
                {cardId === '' || card === null ? <p>Loading...</p> : <p>{card?.name}</p>}
                <br/>
            </div>
            <div className="container p-4 text-white col-span-2 bg-black text-center">
                <h1 className='font-majormonodisplay text-l'>Card Price</h1><br/>
                <p className='font-bold'>Updated Date</p>
                {cardId === '' || card === null ? <p>Loading...</p> : <p>{card?.tcgplayer?.updatedAt}</p>}<br/>
                <p className='font-bold'>Holofoil Market Price (USD)</p>
                {cardId === '' || card === null ? <p>Loading...</p> : <p>{card?.tcgplayer?.prices?.holofoil?.market}</p>}
            </div>
        </div>

    )

}

export {CardDetail};
