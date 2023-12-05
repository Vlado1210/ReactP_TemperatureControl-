import React, {useState} from 'react';
import './index.css';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () =>{
    const TempValue = temperatureValue + 1;
    if(TempValue > 30){return};
    if(TempValue >= 15){
      setTemperatureColor("hot");

    }
    if(TempValue >= 0 && TempValue <= 14 ){
      setTemperatureColor("cold");

    }
    setTemperatureValue(TempValue);
  }

  const decreaseTemperature = () => {
    const TempValue = temperatureValue - 1;
    if(TempValue < (-15)){return}
    if(TempValue < 15){
      setTemperatureColor("cold");

    }
    if(TempValue < 0){
      setTemperatureColor("freeze");
    }
    setTemperatureValue(TempValue);
  }
  return(
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className='button-container'>
        <button onClick={()=> increaseTemperature()}>+</button>
        <button onClick={()=> decreaseTemperature()}>-</button>
      </div>
    </div>

  )
}
export default App;