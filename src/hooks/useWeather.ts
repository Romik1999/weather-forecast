import { useState, useEffect } from 'react';

const useWeather = (latitude:string, longitude:string) => {
    const [weatherData, setWeatherData] = useState(null);
    const [weatherLoading, setWeatherLoading] = useState(true);
    const [weatherError, setWeatherError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`/api/weather?lat=${latitude}&lon=${longitude}&lang=ru&hours=false&extra=true`);
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }

                const data = await response.json();
                setWeatherData(data);
                setWeatherLoading(false);
            } catch (error:any) {
                setWeatherError(error);
                setWeatherLoading(false);
            }
        };

        if (latitude !== '' && longitude !== '') {
            fetchWeatherData();
        }
    }, [latitude, longitude]);

    return { weatherData, weatherLoading, weatherError };
};

export default useWeather;