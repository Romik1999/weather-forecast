import React, {useState} from 'react';
import './App.css';
import Form from "./components/form";
import Weather from "./components/weather";
import axios from "axios";

function App() {

    const [weather, setWeather] = useState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    })

    const APIkey = 'ee62b70201ab148d1f6f10758537e0b3'

    const getWeather = async (e: any) => {
        e.preventDefault()
        const city = e.target.elements.city.value

        if (city){
            const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric&lang=ru`)
            console.log(data.data);
        }
    }

    return (
        <div className="App">
            <Form
                getWeather={getWeather}
            />
            { weather.city && <Weather weather={weather}/>}
        </div>
    );
}

export default App;
