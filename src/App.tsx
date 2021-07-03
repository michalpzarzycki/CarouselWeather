import CarouselWeather from './components/CarouselWeather';
import Button from './components/Button'
import './App.css';
import { useState } from 'react';

function App() {
  const [rotation, setRotation] = useState(false);


  return (
    <div className="App">
      <Button handleClick={() => setRotation(!rotation)}/>
      <CarouselWeather rotation={rotation}/>
      <Button handleClick={() => setRotation(!rotation)}/>
    </div>
  );
}

export default App;
