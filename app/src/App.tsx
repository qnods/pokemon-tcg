import { Brand } from "./components/Header/Brand";
import { AboutUs } from "./components/Header/AboutUs";
import { SetPage } from './components/SetPage/SetPage';
import { SingleCard } from "./components/CardPage/SingleCard";
import { useState } from 'react';


function ComponentB() {
  return <h1>Component B</h1>;
  }
  
  
  function ComponentC() {
  return <h1>Component C</h1>;
  }

function App() {
  const [component, setComponent] = useState('C');

  return (
    <div>
      <Brand />
      <div className="container mx-auto p-4 grid grid-cols-5 gap-4">
          <AboutUs />
          <div className="col-span-2 bg-black text-center text-white text-xl font-majormonodisplay p-4">
            <button onClick={() => setComponent('A')}>Set Cards</button>
          </div>
          <div className="col-span-2 bg-black text-center text-white text-xl font-majormonodisplay p-4">
            <button onClick={() => setComponent('B')}>Single Card</button>
          </div>
      </div>
      {component === 'A' ? <SetPage /> : component === 'B' ? <SingleCard /> : <ComponentC />}

    </div>
  );
}


export default App;
