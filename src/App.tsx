import React, {useState} from 'react';
import './App.scss';
import Form from "./components/form";
import useCityCoordinates from "./hooks/useGetCity";

function App() {
    const cityName = 'Самара';
    const [coordinates, setCoordinates] = useState(null)
    const {cities, loading, error} = useCityCoordinates(cityName);

    const onClickCity = ()=>{

    }

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
