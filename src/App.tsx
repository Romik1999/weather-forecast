import React, {useState} from 'react';
import './App.scss';
import Form from "./components/form";
import useCityCoordinates from "./hooks/useGetCity";

function App() {
    const cityName = 'Самара';

    const { cities, loading, error } = useCityCoordinates(cityName);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="App">
            <Form cities={cities}/>
            {/*{weather.location && <Weather days={weather.days} location={weather.location} now={weather.now}/>}*/}
        </div>
    );
}

export default App;
