import { useState } from 'react';

function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="container mx-auto px-4 grid grid-cols-5 gap-4">
            <div className="col-span-1 bg-blue-300" onClick={handleExpandClick}>
                About Us
                {isExpanded && (
                    <>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                        ut aliquip ex ea commodo consequat. 
                    </>
                )}
            </div>
            <div className="col-span-2 bg-blue-300">Dropdown Set</div>
            <div className="col-span-2 bg-blue-300">Search Card</div>
        </div>
    );
}

export {Navbar};