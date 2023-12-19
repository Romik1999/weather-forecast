import React from 'react';

const Form = (props: any) => {
    const {getWeather} = props
    return (
        <form onSubmit={getWeather}>
            <input type="text" name="city" placeholder="город"/>
            <button type="submit">Получить погоду</button>
        </form>
    );
};

export default Form;