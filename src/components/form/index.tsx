import React from 'react';
import './style.scss'

const Form = (props: any) => {
    const {cities} = props

    console.log("cities: ", cities);
    return (
        <div className="wrapper">
            <div className="inner">
                <form className="form">
                    <input type="text" name="city" placeholder="город" className="form__input"/>
                    <button type="submit" className="form__button">Узнать погоду</button>
                </form>
                <div>
                    {cities.map((city:any, index:number)=>
                        <div key={index}>{city.pointName}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Form;