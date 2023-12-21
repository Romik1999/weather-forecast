import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import './style.scss'
import {Navigation} from 'swiper/modules';

const Weather = (props: any) => {
    const {days, location, now} = props

    return (
        <div className="weather">
            <div className="top">
                <div className="top__cards">
                    <div className="card card--now">
                        <div className="card__day">Сейчас</div>
                        <div className="card__desc">{now.RealFeelTemperature.Phrase}</div>
                        <img
                            src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${now.WeatherIcon < 10 ? `0${now.WeatherIcon}` : now.WeatherIcon}-s.png`}
                            alt={now.IconPhrase}/>
                        <div className="card__props">
                            <div className="card__temp">
                                <span>За окном: {now.Temperature.Value} {now.Temperature.Unit}</span>
                                <span>Ощущается: {now.RealFeelTemperature.Value} {now.RealFeelTemperature.Unit}</span>
                            </div>
                            <div className="card__wind">
                                Ветер: {now.Wind.Direction.Localized} {now.Wind.Speed.Value}&nbsp;.км/ч
                            </div>
                        </div>
                    </div>
                    <div className="card card--today">
                        <div className="card__top">
                            <div className="card__day">Сегодня {new Date(days[0].Date).toLocaleString("Ru", {weekday: "long", month: "long", day: "numeric"})}</div>
                            <div className="card__desc">{days[0].Day.LongPhrase}</div>
                        </div>
                        <div className="card__forecasts">
                            <div className="card__forecast">
                                <div className="card__temp">
                                    Днем: {Math.round(days[0].Temperature.Maximum.Value)} {days[0].Temperature.Maximum.Unit}
                                </div>
                                <img
                                    src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${days[0].Day.Icon < 10 ? `0${days[0].Day.Icon}` : days[0].Day.Icon}-s.png`}
                                    alt={days[0].Day.IconPhrase}/>
                                <div className="card__wind">
                                    Ветер: {days[0].Day.Wind.Direction.Localized}, {days[0].Day.Wind.Speed.Value}&nbsp;.км/ч
                                </div>
                            </div>
                            <div className="card__forecast">
                                <div className="card__temp">
                                    Ночью: {Math.round(days[0].Temperature.Minimum.Value)} {days[0].Temperature.Minimum.Unit}
                                </div>
                                <img
                                    src={`https://developer.accuweather.com/sites/default/files/${days[0].Night.Icon < 10 ? `0${days[0].Night.Icon}` : days[0].Night.Icon}-s.png`}
                                    alt={days[0].Night.IconPhrase}/>
                                <div className="card__wind">
                                    Ветер: {days[0].Night.Wind.Direction.Localized}, {days[0].Night.Wind.Speed.Value}&nbsp;.км/ч
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top__city">
                    <div className="city">
                        <div className="city__country">{location.Country.LocalizedName}</div>
                        <div className="city__city">{location.LocalizedName}</div>
                        <div className="city__coord">
                            <span>{location.GeoPosition.Latitude}</span>
                            <span>{location.GeoPosition.Longitude}</span>
                        </div>
                        <button className="city__button">Изменить</button>
                    </div>
                </div>
            </div>

            <div className="days">
                <div className="days__arrow days__arrow--prev swiper-button-prev"></div>
                <Swiper
                    spaceBetween={15}
                    slidesPerView={3}
                    navigation={{
                        nextEl: '.days__arrow--next',
                        prevEl: '.days__arrow--prev',
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                        },
                        720: {
                            slidesPerView: 2,
                        },
                        1100: {
                            slidesPerView: 3,
                        },
                        1350: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {days.map((day: any) => {
                        let currentDate = new Date(day.Date).toLocaleString("Ru", {
                            weekday: "long",
                            month: "long",
                            day: "numeric"
                        })

                        return (
                            <SwiperSlide key={day.EpochDate}>
                                <div className="card">
                                    <div className="card__top">
                                        <div className="card__day">{currentDate}</div>
                                        <div className="card__desc">{day.Day.LongPhrase}</div>
                                    </div>
                                    <div className="card__forecasts">
                                        <div className="card__forecast">
                                            <div className="card__temp">
                                                Днем: {Math.round(day.Temperature.Maximum.Value)} {day.Temperature.Maximum.Unit}
                                            </div>
                                            <img
                                                src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${day.Day.Icon < 10 ? `0${day.Day.Icon}` : day.Day.Icon}-s.png`}
                                                alt={day.Day.IconPhrase}/>
                                            <div className="card__wind">
                                                Ветер: {day.Day.Wind.Direction.Localized}, {day.Day.Wind.Speed.Value}&nbsp;.км/ч
                                            </div>
                                        </div>
                                        <div className="card__forecast">
                                            <div className="card__temp">
                                                Ночью: {Math.round(day.Temperature.Minimum.Value)} {day.Temperature.Minimum.Unit}
                                            </div>
                                            <img
                                                src={`https://developer.accuweather.com/sites/default/files/${day.Night.Icon < 10 ? `0${day.Night.Icon}` : day.Night.Icon}-s.png`}
                                                alt={day.Night.IconPhrase}/>
                                            <div className="card__wind">
                                                Ветер: {day.Night.Wind.Direction.Localized}, {day.Night.Wind.Speed.Value}&nbsp;.км/ч
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className="days__arrow days__arrow--next swiper-button-next"></div>
            </div>
        </div>
    );
};

export default Weather;