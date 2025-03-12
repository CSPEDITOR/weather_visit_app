import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  let [city, setCity] = useState("");
  let handleChange = (e) => {
    setCity(e.target.value);
  };
  let handlesubmit = (e) => {
    e.preventDefault();
    console.log(city);  
    setCity("");
  };
  return (
    <div className="searchBox">
      <form onSubmit={handlesubmit}>
        <h3>Search for weather</h3>
        <TextField id="city" label="City Name" variant="outlined" required 
        value={city} onChange={handleChange} />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
