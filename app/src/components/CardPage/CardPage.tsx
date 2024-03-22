import { useState } from 'react';
import { CardDetail } from './CardDetail';



function CardPage() {
    const [cardId, setCardId] = useState<string>('');
  
    const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCardId(event.target.value);
    };

    return (
      <div>
        {/* Page Navbar */}
        <div className="container mx-auto px-4 grid grid-cols-5 gap-4">
          <div className="col-span-5 bg-black p-4 text-xl text-center font-majormonodisplay">
            <input type="text" value={cardId} onChange={handleIdChange} placeholder="Enter ID" />
          </div>
        </div>
        {/* Main Page Component */}
      
        <CardDetail cardId={cardId} />
     

      </div>
      );
}
export {CardPage};
