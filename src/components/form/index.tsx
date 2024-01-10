import React, {useState} from 'react';
import './style.scss'

const Form = (props: any) => {
    const {cities, setCity, city, setCoordinates, loading, onSearch} = props
    const [open, setOpen] = useState(false)
    const showCities = !loading && cities && cities.length > 0;
    const showLoading = !showCities && loading
    const showEmptyBox = cities && cities.length === 0 && !loading

    return (
        <div className="wrapper">
            <div className="inner">
                <form className="form" onClick={(e) => {
                    e.preventDefault()
                }}>
                    <div className="form__field">
                        <input
                            type="text"
                            name="city"
                            placeholder="город"
                            className="form__input"
                            onChange={(e) => setCity(e.target.value)}
                            onClick={() => setOpen(prev => !prev)}
                            value={city}
                        />
                        {open && <div className="tooltip">
                            <div className="tooltip__inner">
                                {showCities && <>{cities.map((city: any, index: number) =>
                                    <div className="tooltip__item"
                                         key={index}
                                         onClick={() => {
                                             setCoordinates({
                                                 lat: city.pointCoordination.lat,
                                                 lon: city.pointCoordination.lon
                                             })
                                             setCity(city.pointName)
                                             setOpen(false)
                                         }
                                         }
                                    >
                                        {city.pointName} ({city.pointDescription})
                                    </div>
                                )}</>}
                                {showLoading && <div className="tooltip__loading">loading</div>}
                                {showEmptyBox && <div className="tooltip__empty">Городов не найдено</div>}
                            </div>
                        </div>}
                    </div>
                    <button onClick={onSearch} type="submit" className="form__button">Узнать погоду</button>
                </form>
            </div>
        </div>
    );
};

export default Form;