import React from 'react'
import Button from './components/button/Button.jsx';

function App() {
  return (
    <div>
      <Button name="Apply" 
              size={[50, 50]} 
              textSize={29} 
              bcColour="blue"
              textColour="white"
      />
       
    </div>
  );
}


export default App;
