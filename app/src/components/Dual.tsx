import { useState } from 'react';


function ComponentA() {
    return <h1>Component A</h1>;
  }
  
function ComponentB() {
return <h1>Component B</h1>;
}


function ComponentC() {
return <h1>Component C</h1>;
}

function Dual() {
    const [component, setComponent] = useState('A');

    return (
      <div>
        {component === 'A' ? <ComponentA /> : component === 'B' ? <ComponentB /> : <ComponentC />}
        <button onClick={() => setComponent('A')}>Show Component A</button>
        <button onClick={() => setComponent('B')}>Show Component B</button>
        <button onClick={() => setComponent('C')}>Show Component C</button>
      </div>
    );
  }
  
export { Dual };