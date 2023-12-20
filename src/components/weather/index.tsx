import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import './style.scss'
import { Navigation} from 'swiper/modules';

const Weather = (props: any) => {
    // const {days, location} = props

    return (
        <div className="weather">
            <div className="top">
                <div className="top__info">
                    <div className="card">
                        <div className="card__day">Понедельник, 17 апреля</div>
                        <div className="card__desc">облачно с прояснениями</div>
                        <div className="card__props">
                            <div className="card__temp">
                                <span>За окном: 20 &#8451;</span>
                                <span>Ощущается: 25 &#8451;</span>
                            </div>
                            <div className="card__pressure">Давление: 775мм рт. ст.</div>
                            <div className="card__wind">Ветер: северозападный 0,75м/с</div>
                        </div>
                    </div>
                </div>
                <div className="top__city">
                    <div className="city">
                        <div className="city__country">Россиия</div>
                        <div className="city__city">Самара</div>
                        <div className="city__coord">
                            <span>42.634151</span>
                            <span>13.634151</span>
                        </div>
                        <button className="city__button">Изменить</button>
                    </div>
                </div>
            </div>

            <div className="days">
                <Swiper
                    spaceBetween={35}
                    slidesPerView={3}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="card">
                            <div className="card__day">Понедельник, 17 апреля</div>
                            <div className="card__desc">облачно с прояснениями</div>
                            <div className="card__props">
                                <div className="card__temp card__temp--day">Днем 15</div>
                                <div className="card__temp card__temp--night">Ночью 15</div>
                                <div className="card__wind">Ветер: северозападный 0,75м/с</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="card__day">Понедельник, 17 апреля</div>
                            <div className="card__desc">облачно с прояснениями</div>
                            <div className="card__props">
                                <div className="card__temp card__temp--day">Днем 15</div>
                                <div className="card__temp card__temp--night">Ночью 15</div>
                                <div className="card__wind">Ветер: северозападный 0,75м/с</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="card__day">Понедельник, 17 апреля</div>
                            <div className="card__desc">облачно с прояснениями</div>
                            <div className="card__props">
                                <div className="card__temp card__temp--day">Днем 15</div>
                                <div className="card__temp card__temp--night">Ночью 15</div>
                                <div className="card__wind">Ветер: северозападный 0,75м/с</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="card__day">Понедельник, 17 апреля</div>
                            <div className="card__desc">облачно с прояснениями</div>
                            <div className="card__props">
                                <div className="card__temp card__temp--day">Днем 15</div>
                                <div className="card__temp card__temp--night">Ночью 15</div>
                                <div className="card__wind">Ветер: северозападный 0,75м/с</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="card__day">Понедельник, 17 апреля</div>
                            <div className="card__desc">облачно с прояснениями</div>
                            <div className="card__props">
                                <div className="card__temp card__temp--day">Днем 15</div>
                                <div className="card__temp card__temp--night">Ночью 15</div>
                                <div className="card__wind">Ветер: северозападный 0,75м/с</div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Weather;