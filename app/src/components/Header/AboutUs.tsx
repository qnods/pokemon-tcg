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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                        ut aliquip ex ea commodo consequat.
                    </p>
                </>
            )}
        </div>
    )

}

export {AboutUs};