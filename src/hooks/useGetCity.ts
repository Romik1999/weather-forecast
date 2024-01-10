import { useState, useEffect } from 'react';
import axios from "axios";

interface ICities {
    pointName: string,
    pointDescription: string,
    pointCoordination: {
        lat: string,
        lon: string
    }
}
const useCityCoordinates = (city:string) => {
    const [cities, setCities] = useState<any | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCoordinatesByCity = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=1d446078-2496-459f-9aaa-dd5bb7c88767&geocode=${city}&format=json`);
                console.log("response: ", response);
                const points = response.data.response.GeoObjectCollection.featureMember.map(function (point:any) {
                    return {
                        pointName: point.GeoObject.name,
                        pointDescription: point.GeoObject.description,
                        pointSlug: point.GeoObject.description,
                        pointCoordination: {
                            lat: point.GeoObject.Point.pos.split(' ')[1],
                            lon: point.GeoObject.Point.pos.split(' ')[0]
                        }
                    }
                })
                setLoading(false);
                setCities(points)
            } catch (error:any) {
                setError(error);
                setLoading(false);
                console.error('Error fetching coordinates:', error);
            }
        };
        if (city.length !== 0) {
            getCoordinatesByCity();
        }
    }, [city]);

    return { cities, loading, error };
};

export default useCityCoordinates;