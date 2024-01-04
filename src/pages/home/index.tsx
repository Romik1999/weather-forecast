import React, {useState} from 'react';
import Form from "../../components/form";
import useCityCoordinates from "../../hooks/useGetCity";
import useWeather from "../../hooks/useWeather";
import {ICoordinates} from "../../common/types";

const Home = () => {
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

    const onSearch = () => {
        setCoordinatesToSearch(coordinates)
    }

    return (
        <div>
            <Form onSearch={onSearch} setCity={setCity} loading={loading} setCoordinates={setCoordinates} cities={cities}/>
        </div>
    );
};

export default Home;