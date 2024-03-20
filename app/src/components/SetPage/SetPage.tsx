import { useState } from 'react';
import { SetInfo } from './SetInfo';
import { SetCards } from './SetCards';


function SetPage() {
    const [setID, setSetID] = useState('sv1');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSetID(event.target.value);
    };

    return (
        <div>
            {/* Page Navbar */}
            <div className="container mx-auto px-4 grid grid-cols-5 gap-4">
              <div className="col-span-5 bg-black p-4 text-xl text-center font-majormonodisplay">
                <select value={setID} onChange={handleChange}>
                    <option value="sv1">Scarlet & Violet</option>
                    <option value="sv2">Paldea Evolved</option>
                    <option value="sv3">Obsidian Flame</option>
                    <option value="sv3pt5">151</option>
                    <option value="sv4">Paradox Rift</option>
                    {/* Add more options as needed */}
                </select>
              </div>
            </div>
            {/* Main Page Component */}
            <div className="container mx-auto p-4 grid grid-cols-5 gap-4">

              <SetInfo setID={setID}/>
              <SetCards setID={setID}/>
          </div>
        </div>

    );
}

export {SetPage};