import { useState } from "react";
import styled from "styled-components"
import { CityComponent } from "./components/CityComponent";
import { WeatherComponent } from "./components/WeatherComponent";
import axios from 'axios'

const API_KEY= "c86d3437e0c58acc9528282fee4ca2b7";

const Container = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
border-radius: 4px;
width:380px;
background:white;
font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  font-size: 18px; 
  font-weight: bold;
`;


function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async(e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    //console.log(response.data);
    setWeather(response.data);
  }

  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {
        weather ? (
          <WeatherComponent weather={weather}/>
        ) : (
          <CityComponent setCity={setCity} fetchWeather={fetchWeather} />
        )
      }
    </Container>
  );
}

export default App;
