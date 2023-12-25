import { useState, useEffect } from 'react';
import axios from "axios";

interface Coordinates {
    latitude: number,
    longitude: number,
}
const useCityCoordinates = (city:string) => {
    const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCoordinatesByCity = async () => {
            try {
                const response = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=1d446078-2496-459f-9aaa-dd5bb7c88767&geocode=${city}&format=json`);
                const points = response.data.response.GeoObjectCollection.featureMember;
                console.log("points:",points);
                setLoading(false);
            } catch (error:any) {
                setError(error);
                setLoading(false);
                console.error('Error fetching coordinates:', error);
            }
        };

        getCoordinatesByCity();
    }, [city]);

    return { coordinates, loading, error };
};

export default useCityCoordinates;