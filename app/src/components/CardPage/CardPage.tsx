import {useState} from "react";
import { CardIdSection } from "./CardIdSection/CardIdSection";
import { CardFindSection } from "./CardFindSection/CardFindSection"

function CardPage(){
    const [component, setComponent] = useState('Card Id Section');

    return (
    <div>
      <div className="container mx-auto p-4 grid grid-cols-4 gap-4">
          <div className="col-span-2 bg-black text-center text-white text-xl font-majormonodisplay p-4">
            <button 
              className={`p-2 ${component === 'Card Id Section' ? 'bg-red-500' : 'bg-black'}`} 
              onClick={() => setComponent('Card Id Section')}
            >Card By Id</button>
          </div>
          <div className="col-span-2 bg-black text-center text-white text-xl font-majormonodisplay p-4">
            <button
              className={`p-2 ${component === 'Card Find Section' ? 'bg-red-500' : 'bg-black'}`} 
              onClick={() => setComponent('Card Find Section')}
            >Find Card(s)</button>
          </div>
      </div>
      {component === 'Card Id Section' ? <CardIdSection /> : component === 'Card Find Section' ? <CardFindSection /> : <CardIdSection />}

    </div>
    )
}

export {CardPage};