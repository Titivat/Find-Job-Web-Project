import React, { useState } from 'react';
import Button from './components/button/Button.jsx';

function App() {
  const [count, setCount] = useState( 0 );

  function changeValue(){
    setCount( count + 1 );
    console.log( count );
  }

  return (
    <div>
      <h1>{ count }</h1>

      <Button name="Apply" 
              size={[50, 50]} 
              textSize={29} 
              bcColour="blue"
              textColour="white"
              onClick = {changeValue}
      />

    </div>
  );
}


export default App;
