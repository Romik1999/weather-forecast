import React from 'react';

const Weather = (props: any) => {
    const {weather} = props
    console.log("weather: ", weather);
    return (
        <div>
            Компонент погоды в {weather.city}


        </div>
    );
};

export default Weather;