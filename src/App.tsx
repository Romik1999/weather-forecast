import React, {useState} from 'react';
import './App.scss';
import Form from "./components/form";
import useCityCoordinates from "./hooks/useGetCity";
import useWeather from "./hooks/useWeather";
import Weather from "./components/weather";

interface ICoordinates {
    lat: string,
    lon: string
}
function App() {
    const [city, setCity] = useState('');
    const [coordinates, setCoordinates] = useState<ICoordinates>({
        lat: '',
        lon: ''
    })
    const [coordinatesToSearch, setCoordinatesToSearch] = useState<ICoordinates>({
        lat: '',
        lon: ''
    })
    const {cities, loading, error} = useCityCoordinates(city);
    const {weatherData, weatherLoading, weatherError} = useWeather(coordinatesToSearch.lat, coordinatesToSearch.lon)

    const onSearch = ()=>{
        setCoordinatesToSearch(coordinates)
    }

    return (
        <div className="App">
            {!weatherData && <Form onSearch={onSearch} setCity={setCity} loading={loading} setCoordinates={setCoordinates} cities={cities}/>}
            {weatherData && <Weather weatherData={weatherData}/>}
        </div>
    );
}

export default App;
