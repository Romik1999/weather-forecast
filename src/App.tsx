import React, {useState} from 'react';
import './App.scss';
import Form from "./components/form";
import Weather from "./components/weather";
import axios from "axios";
import {apiKey, apiUrl, language} from "./common/consts";

function App() {

    const [weather, setWeather] = useState({
        location: undefined,
        days: undefined,
        now: undefined
    })

    const getWeather = async (e: any) => {
        e.preventDefault()
        const city = e.target.elements.city.value

        if (city) {
            const location = await axios.get(`${apiUrl}/locations/v1/cities/search?apikey=${apiKey}&q=${city}${language}`)

            if (location){
                const days = await axios.get(`${apiUrl}/forecasts/v1/daily/5day/${location.data[0].Key}?apikey=${apiKey}${language}`)
                const now = await axios.get(`${apiUrl}/forecasts/v1/hourly/1hour/${location.data[0].Key}?apikey=${apiKey}${language}`)

                setWeather(prev => ({
                    ...prev,
                    location: location.data[0],
                    days: days.data.DailyForecasts,
                    now: now.data[0]
                }))
            }
        }
    }

    return (
        <div className="App">
            {!weather.location && <Form getWeather={getWeather}/>}
            {weather.location && <Weather days={weather.days} location={weather.location} now={weather.now}/>}
        </div>
    );
}

export default App;
