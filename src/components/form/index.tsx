import React from 'react';
import './style.scss'

const Form = (props: any) => {
    const {cities, setCity, setCoordinates} = props

    return (
        <div className="wrapper">
            <div className="inner">
                <form className="form">
                    <div className="form__field">
                        <input
                            type="text"
                            name="city"
                            placeholder="город"
                            className="form__input"
                            onChange={(e) => setCity(e.target.value)}
                        />
                        {cities && <div className="tooltip">
                            {cities.map((city: any, index: number) =>
                                <div className="tooltip__item"
                                     key={index}
                                     onClick={() => setCoordinates({
                                         lat: city.pointCoordination.lat,
                                         lon: city.pointCoordination.lon
                                     })}
                                >
                                    {city.pointName} ({city.pointDescription})
                                </div>
                            )}
                        </div>}
                    </div>
                    <button type="submit" className="form__button">Узнать погоду</button>
                </form>
            </div>
        </div>
    );
};

export default Form;