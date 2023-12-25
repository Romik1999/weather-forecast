import React, {useState} from 'react';
import './App.scss';
import Form from "./components/form";
import Weather from "./components/weather";
import axios from "axios";
import {apiKey, apiUrl, language} from "./common/consts";
import useWeather from "./hooks/useWeather";
import useCityCoordinates from "./hooks/useGetCity";

function App() {
    const cityName = 'Самара';

    const { coordinates, loading, error } = useCityCoordinates(cityName);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="App">
            {/*{!weather.location && <Form getWeather={getWeather}/>}*/}
            {/*{weather.location && <Weather days={weather.days} location={weather.location} now={weather.now}/>}*/}
        </div>
    );
}

export default App;
