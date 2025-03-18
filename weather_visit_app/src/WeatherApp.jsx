import SearchBox from "./SearchBox";
import "./SearchBox.css";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function Weatherapp() {
    const [weatherInfo , setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo =(newInfo) =>{
        setWeatherInfo(newInfo);

    }
  return (
    <>
    <div style={{textAlign: "center"}}>
      <h1>Weather app by Chandra</h1>
      <SearchBox updateInfo ={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
    </>
  );
}
