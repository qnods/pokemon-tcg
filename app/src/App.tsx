import { Brand } from "./components/Header/Brand";
import { AboutUs } from "./components/Header/AboutUs";
import { SetPage } from './components/SetPage/SetPage';
import { CardPage } from './components/CardPage/CardPage'
import { useState } from 'react';


function App() {
  const [component, setComponent] = useState('Set Page');

  return (
    <div>
      <Brand />
      <div className="container mx-auto p-4 grid grid-cols-5 gap-4">
          <AboutUs />
          <div className="col-span-2 bg-black text-center text-white text-xl font-majormonodisplay p-4">
            <button 
                className={`p-2 ${component === 'Set Page' ? 'bg-red-500' : 'bg-black'}`} 
                onClick={() => setComponent('Set Page')}
              >
                Set Cards
              </button>
          </div>
          <div className="col-span-2 bg-black text-center text-white text-xl font-majormonodisplay p-4">
            <button 
                className={`p-2 ${component === 'Card Page' ? 'bg-red-500' : 'bg-black'}`} 
                onClick={() => setComponent('Card Page')}
              >
                Single Card
              </button>
          </div>
      </div>
      {component === 'Set Page' ? <SetPage /> : component === 'Card Page' ? <CardPage /> : <SetPage />}

      {/* footer */}
      <div className="fixed bottom-0 w-full bg-black text-white">
        <div className="container mx-auto p-4">
          <p>© 2022 qnods by Edward Joesoef. All rights reserved.</p>
        </div>
      </div>

    </div>
  );
}


export default App;
