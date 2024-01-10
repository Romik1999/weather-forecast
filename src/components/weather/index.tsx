import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import './style.scss'
import {Navigation} from 'swiper/modules';
import {condition} from "../../common/consts";
import {useLocation, useParams} from "react-router-dom";
import useWeather from "../../hooks/useWeather";

type Coordinates = {
    requestCity: string
}

const WeatherComponent = () => {
    const {requestCity} = useParams<Coordinates>();
    const location = useLocation();
    console.log("location: ", location.state);
    const {weatherData, weatherLoading, weatherError} = useWeather(location.state.pointCoordination.lat, location.state.pointCoordination.lon)
    console.log("weatherData: ", weatherData);
    return (
        <>
            <h2>WeatherComponent</h2>
        </>
        // <div className="weather">
        //     <div className="top">
        //         <div className="top__cards">
        //             <div className="card card--now">
        //                 <div className="card__day">Сейчас</div>
        //                 <div className="card__desc">{weatherData.fact.condition}</div>
        //                 <img
        //                     src={`https://yastatic.net/weather/i/icons/funky/dark/${weatherData.fact.icon}.svg`}
        //                     alt={weatherData.fact.icon}/>
        //                 <div className="card__props">
        //                     <div className="card__temp">
        //                         <span>За окном: {weatherData.fact.temp}</span>
        //                         <span>Ощущается: {weatherData.fact.feels_like}</span>
        //                     </div>
        //                     <div className="card__wind">
        //                         Ветер: {weatherData.fact.wind_dir} {weatherData.fact.wind_speed}&nbsp;.км/ч
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="card card--today">
        //                 <div className="card__top">
        //                     <div className="card__day"></div>
        //                     <div className="card__desc">{weatherData.forecasts[0].parts.day.condition}</div>
        //                 </div>
        //                 <div className="card__forecasts">
        //                     <div className="card__forecast">
        //                         <div className="card__temp">
        //                             Днем: {Math.round(weatherData.forecasts[0].parts.day.temp_max)}
        //                         </div>
        //                         <img
        //                             src={`https://yastatic.net/weather/i/icons/funky/dark/${weatherData.forecasts[0].parts.day.icon}.svg`}
        //                             alt={weatherData.forecasts[0].parts.day.icon}/>
        //                         <div className="card__wind">
        //                             Ветер: {weatherData.forecasts[0].parts.day.wind_dir}, {weatherData.forecasts[0].parts.day.wind_speed}&nbsp;.км/ч
        //                         </div>
        //                     </div>
        //                     <div className="card__forecast">
        //                         <div className="card__temp">
        //                             Ночью: {Math.round(weatherData.forecasts[0].parts.night.temp_min)}
        //                         </div>
        //                         <img
        //                             src={`https://yastatic.net/weather/i/icons/funky/dark/${weatherData.forecasts[0].parts.night.icon}.svg`}
        //                             alt={weatherData.forecasts[0].parts.night.icon}/>
        //                         <div className="card__wind">
        //                             Ветер: {weatherData.forecasts[0].parts.night.wind_dir}, {weatherData.forecasts[0].parts.night.wind_speed}&nbsp;.км/ч
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="top__city">
        //             <div className="city">
        //                 <div className="city__country">{weatherData.geo_object.country.name}</div>
        //                 <div className="city__city">{weatherData.geo_object.province.name}</div>
        //                 <div className="city__coord">
        //                     <span>{weatherData.info.lat}</span>
        //                     <span>{weatherData.info.lon}</span>
        //                 </div>
        //                 <button className="city__button">Изменить</button>
        //             </div>
        //         </div>
        //     </div>
        //
        //     <div className="days">
        //         <div className="days__arrow days__arrow--prev swiper-button-prev"></div>
        //         <Swiper
        //             spaceBetween={15}
        //             slidesPerView={3}
        //             navigation={{
        //                 nextEl: '.days__arrow--next',
        //                 prevEl: '.days__arrow--prev',
        //             }}
        //             modules={[Navigation]}
        //             breakpoints={{
        //                 300: {
        //                     slidesPerView: 1,
        //                 },
        //                 720: {
        //                     slidesPerView: 2,
        //                 },
        //                 1100: {
        //                     slidesPerView: 3,
        //                 },
        //                 1350: {
        //                     slidesPerView: 4,
        //                 },
        //             }}
        //         >
        //             {weatherData.forecasts.filter((forecast: any, index: number) => index > 0).map((day: any, index: number) => {
        //                 let currentDate = new Date(day.date).toLocaleString("Ru", {
        //                     weekday: "long",
        //                     month: "long",
        //                     day: "numeric"
        //                 })
        //
        //                 return (
        //                     <SwiperSlide key={index}>
        //                         <div className="card">
        //                             <div className="card__top">
        //                                 <div className="card__day">{currentDate}</div>
        //                                 <div
        //                                     className="card__desc">{condition[day.parts.day.condition as keyof typeof condition]}</div>
        //                             </div>
        //                             <div className="card__forecasts">
        //                                 <div className="card__forecast">
        //                                     <div className="card__temp">
        //                                         Днем: {Math.round(day.parts.day.temp_max)}
        //                                     </div>
        //                                     <img
        //                                         src={`https://yastatic.net/weather/i/icons/funky/dark/${day.parts.day.icon}.svg`}
        //                                         alt={day.parts.day.icon}/>
        //                                     <div className="card__wind">
        //                                         Ветер: {day.parts.day.wind_dir}, {day.parts.day.wind_speed}&nbsp;.км/ч
        //                                     </div>
        //                                 </div>
        //                                 <div className="card__forecast">
        //                                     <div className="card__temp">
        //                                         Ночью: {Math.round(day.parts.night.temp_min)}
        //                                     </div>
        //                                     <img
        //                                         src={`https://yastatic.net/weather/i/icons/funky/dark/${day.parts.night.icon}.svg`}
        //                                         alt={day.parts.night.icon}/>
        //                                     <div className="card__wind">
        //                                         Ветер: {day.parts.night.wind_dir}, {day.parts.night.wind_speed}&nbsp;.км/ч
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </SwiperSlide>
        //                 )
        //             })}
        //         </Swiper>
        //         <div className="days__arrow days__arrow--next swiper-button-next"></div>
        //     </div>
        // </div>
    );
};

export default WeatherComponent;