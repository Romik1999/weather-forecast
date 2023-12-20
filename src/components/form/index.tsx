import React from 'react';
import './style.scss'

const Form = (props: any) => {
    const {getWeather} = props
    return (
        <div className="wrapper">
            <div className="inner">
                <form onSubmit={getWeather} className="form">
                    <input type="text" name="city" placeholder="город" className="form__input"/>
                    <button type="submit" className="form__button">Узнать погоду</button>
                </form>
            </div>
        </div>
    );
};

export default Form;