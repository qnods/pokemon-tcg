import { useState } from 'react';


function AboutUs(){
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="col-span-1 bg-black text-center text-white p-4" onClick={handleExpandClick}>
            <h2 className="text-xl font-majormonodisplay">V About Us</h2>
            {isExpanded && (
                <>
                    <br/>
                    <p>
                        Welcome to Pokémon TCG Database that is curated by qnods with Pokemon TCG API.
                        Your go-to source for all things Pokémon Trading Card Game.
                        Discover cards and decks with ease.
                        Dive into our curated collection and join a vibrant community of players.
                        Start your adventure with us today! <br />
                    </p>
                </>
            )}
        </div>
    )

}

export {AboutUs};