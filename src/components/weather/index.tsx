import React from 'react';

const Weather = (props: any) => {
    const {days, location} = props
    console.log("days: ", days);
    console.log("location: ", location);
    return (
        <div>
            Погода в {location.name}
        </div>
    );
};

export default Weather;