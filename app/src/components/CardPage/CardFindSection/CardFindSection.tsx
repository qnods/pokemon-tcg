import { useState } from 'react';
import { CardFinder } from './CardFinder';



function CardFindSection() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [params, setParams] = useState<string>('name');
  
    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleParamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setParams(event.target.value);
    };

    return (
    <div className="container mx-auto p-4 grid grid-cols-5 gap-4">

        {/* Page Navbar */}
        <div className="container p-1 col-span-1 bg-black text-center">
            <h1 className='font-majormonodisplay text-white'>Search Setting</h1>
            <div className='p-4'>
                <p className='font-bold text-white'>Search Parameter</p>
                <select value={params} onChange={handleParamChange}>
                        <option value="name">Name</option>
                        <option value="set.id">Set ID</option>
                        {/* Add more options as needed */}
                </select>
            </div>
            <div className='p-4'>
                <p className='font-bold text-white'>Search Query</p>
                <input type="text" value={searchQuery} onChange={handleQueryChange} placeholder="Enter Query" className='mx-auto block w-full' />
            </div>
   

        </div>
        {/* Main Page Component */}
        <div className="container p-4 col-span-4 text-center">
        
            <CardFinder searchParam={params} searchQuery={searchQuery}/>

        </div>
        
     

      </div>
      );
}
export {CardFindSection};
