import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "25bcdcac4edc12957478bca8182d329b";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
      city: jsonResponse.name,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feelsLike,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };
  let handlesubmit = async(e) => {
    e.preventDefault();
    console.log(city);
    setCity("");
    let newInfo =await getWeatherInfo();
    updateInfo(newInfo);
  };
  return (
    <div className="searchBox">
      <form onSubmit={handlesubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
