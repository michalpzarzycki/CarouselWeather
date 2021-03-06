import CarouselWeather from './components/CarouselWeather';
import Button from './components/Button'
import './App.css';
import { useState, useEffect } from 'react';
import {fetchWeather} from './utils/fetchWeather'
import {weatherDataConvert} from './utils/weatherDataConventer'
let cities = ['Gdansk', 'Los Angeles', 'Madrid', 'Buenos Aires', 'Tokyo', 'Polkowice']
function App() {
  const [rotation, setRotation] = useState<{rotateLeft: boolean, rotateRight: boolean}>({rotateLeft: false, rotateRight: false});

  const [weathers, setWeathers] = useState<any[]>([])

  useEffect(() => {

    let weatherPromises = cities.map((city: any) => fetchWeather(city))

    Promise.all([...weatherPromises]).then((values: any) => {

      let newValues = values.map((value: any) => weatherDataConvert(value.data))
      console.log(newValues)
      setWeathers([...newValues])
    });

  }, [])
  return (
    <div className="App">
      <Button handleClick={() => setRotation({rotateLeft: true, rotateRight: false})} isRight={false}/>
      <CarouselWeather rotation={rotation} weathers={weathers}/>
      <Button handleClick={() => setRotation({rotateLeft: false, rotateRight: true})} isRight={true}/>
    </div>
  );
}

export default App;
