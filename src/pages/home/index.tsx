import React, {FC, useEffect, useRef, useState} from 'react';
import useCityCoordinates from "../../hooks/useGetCity";
import {City, ICoordinates} from "../../common/types";
import {useNavigate} from "react-router-dom";
import './style.scss'

const Home:FC = () => {
    const [cityFromKeyboard, setCityFromKeyboard] = useState('');
    const [cityFromApi, setCityFromApi] = useState<City | null>({
        pointName: '',
        pointDescription: '',
        pointCoordination: {
            lat: '',
            lon: ''
        }
    });
    const [open, setOpen] = useState(false)
    const wrapTooltip = useRef<HTMLInputElement>(null)
    const inputForTooltipRef = useRef<HTMLInputElement>(null)
    const {cities, loading, error} = useCityCoordinates(cityFromKeyboard);

    const navigate = useNavigate();

    const showCities = !loading && cities && cities.length > 0;
    const showLoading = !showCities && loading
    const showEmptyBox = cities && cities.length === 0 && !loading
    const inputValue = cityFromApi?.pointName !== '' ? `${cityFromApi?.pointName} ${cityFromApi?.pointDescription}` : cityFromKeyboard

    const onSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate(`/weather/${cityFromApi?.pointName}`, {state: cityFromApi});
    }

    // const handleClick = (e:any) =>{
    //     if (wrapTooltip.current && !wrapTooltip.current.contains(e.target) && inputForTooltipRef.current){
    //         // alert('click out tooltip!')
    //         setOpen(false)
    //     }
    // }

    // useEffect(()=>{
    //     document.addEventListener("mousedown", handleClick)
    //     return()=>{
    //         document.removeEventListener("mousedown", handleClick)
    //     }
    // }, [])

    const onInputClick = ()=>{
        if (!open){
            setOpen(true)
        }
    }

    return (
        <div className="wrapper">
            <div className="inner">
                <form className="form" onSubmit={onSearch}>
                    <div className="form__field">
                        <input
                            type="text"
                            name="city"
                            placeholder="город"
                            className="form__input"
                            onChange={(e) => setCityFromKeyboard(e.target.value)}
                            onClick={onInputClick}
                            value={inputValue}
                            ref={inputForTooltipRef}
                        />
                        {open && <div className="tooltip" ref={wrapTooltip}>
                            <div className="tooltip__inner">
                                {showCities && <>{cities.map((city: City, index: number) =>
                                    <div className="tooltip__item"
                                         key={index}
                                         onClick={() => {
                                             setCityFromApi({
                                                 ...cityFromApi,
                                                 pointName: city.pointName,
                                                 pointDescription: city.pointDescription,
                                                 pointCoordination: {
                                                     lat: city.pointCoordination.lat,
                                                     lon: city.pointCoordination.lon
                                                 }
                                             })
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
                    <button type="submit" className="form__button">Узнать погоду</button>
                </form>
            </div>
        </div>
    );
};

export default Home;