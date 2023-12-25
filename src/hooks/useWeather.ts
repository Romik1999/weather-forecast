import { useState, useEffect } from 'react';

const useWeather = (latitude:number, longitude:number) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`/api/weather?lat=${latitude}&lon=${longitude}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }

                const data = await response.json();
                setWeatherData(data);
                setLoading(false);
            } catch (error:any) {
                setError(error);
                setLoading(false);
            }
        };

        if (latitude !== null && longitude !== null) {
            fetchWeatherData();
        }
    }, [latitude, longitude]);

    return { weatherData, loading, error };
};

export default useWeather;