import React, {useState} from 'react';
import './App.scss';
import Form from "./components/form";
import Weather from "./components/weather";
import axios from "axios";

function App() {

    const [weather, setWeather] = useState({
        location: undefined,
        days: undefined
    })

    const apiKey = 'Rk51fuluAWBqqXDYuKzXh3F0DkYfuyWN';

    const getWeather = async (e: any) => {
        e.preventDefault()
        const city = e.target.elements.city.value

        if (city) {
            const data = await axios.get(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${apiKey}`)
            setWeather(prev => ({
                ...prev,
                location: data.data.location,
                days: data.data.timelines.daily
            }))
        }
    }

    return (
        <div className="App">
            <Form
                getWeather={getWeather}
            />
            {weather.location && <Weather days={weather.days} location={weather.location}/>}
            <Weather/>
        </div>
    );
}

export default App;
