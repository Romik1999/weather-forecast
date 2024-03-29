export interface ICoordinates {
    lat: string,
    lon: string
}

export type City = {
    pointName: string,
    pointDescription: string,
    pointCoordination: {
        lat: string,
        lon: string
    }
}

// export interface WeatherData {
//     now: 1470220206,
//     now_dt: "2016-08-03T10:30:06.238Z",
//     info: {
//         lat: 55.833333,
//         lon: 37.616667,
//         tzinfo: {
//             offset: 10800,
//             name: "Europe/Moscow",
//             abbr: "MSK",
//             dst: false
//         },
//         def_pressure_mm: 746,
//         def_pressure_pa: 994,
//         url: "https://yandex.ru/pogoda/moscow"
//     },
//     fact: {
//         temp: 20,
//         feels_like: 21,
//         icon: "ovc",
//         condition: "overcast",
//         wind_speed: 2,
//         wind_gust: 5.9,
//         wind_dir: "n",
//         pressure_mm: 745,
//         pressure_pa: 994,
//         humidity: 83,
//         daytime: "d",
//         polar: false,
//         season: "summer",
//         prec_type: 1,
//         prec_strength: 0.25,
//         is_thunder: false,
//         cloudness: 1,
//         obs_time: 1470214800
//         phenom_icon: "ovm",
//         phenom-condition: "fog"
//     },
//     forecasts: [
//         {
//             date: "2016-08-03",
//             date_ts: 1470171600,
//             week: 32,
//             sunrise: "04:38",
//             sunset: "20:31",
//             moon_code: 8,
//             moon_text: "moon-code-8",
//             parts: {
//                 night: {
//                     temp_min: 20,
//                     temp_max: 21,
//                     temp_avg: 21,
//                     feels_like: 23,
//                     icon: "bkn_n",
//                     condition: "cloudy",
//                     daytime: "n",
//                     polar: false,
//                     wind_speed: 0.9,
//                     wind_gust: 4,
//                     wind_dir: "nw",
//                     pressure_mm: 746,
//                     pressure_pa: 995,
//                     humidity: 81,
//                     prec_mm: 0,
//                     prec_period: 360,
//                     prec_type: 0,
//                     prec_strength: 0,
//                     cloudness: 0.75
//                 },
//                 evening: {
//                     temp_min: 17,
//                     temp_max: 19,
//                     temp_avg: 18,
//                     feels_like: 19,
//                     icon: "bkn_ra",
//                     condition: "rain",
//                     daytime: "d",
//                     polar: false,
//                     wind_speed: 1.8,
//                     wind_dir: "nw",
//                     pressure_mm: 745,
//                     pressure_pa: 994,
//                     humidity: 99,
//                     prec_mm: 17.95,
//                     prec_period: 360,
//                     prec_type: 1,
//                     prec_strength: 0.5,
//                     cloudness: 0.75,
//                 },
//                 day_short: {
//                     temp: 20,
//                     temp_min: 18,
//                     feels_like: 21,
//                     icon: "ovc_-ra",
//                     condition: "light-rain",
//                     wind_speed: 1.9,
//                     wind_gust: 5.9,
//                     wind_dir: "nw",
//                     pressure_mm: 745,
//                     pressure_pa: 994,
//                     humidity: 88,
//                     prec_type: 1,
//                     prec_strength: 0.25,
//                     cloudness: 1,
//                 },
//                 night_short: {
//                     temp: 20,
//                     feels_like: 22,
//                     icon: "bkn_n",
//                     condition: "cloudy",
//                     wind_speed: 0.9,
//                     wind_gust: 5.9,
//                     wind_dir: "nw",
//                     pressure_mm: 746,
//                     pressure_pa": 995,
//                     "humidity": 81,
//                     "prec_type": 0,
//                     "prec_strength": 0,
//                     "cloudness": 0.75,
//                 }
//             },
//             "hours": [
//                 {
//                     "hour": "0",
//                     "hour_ts": 1470171600,
//                     "temp": 21,
//                     "feels_like": 23,
//                     "icon": "bkn_n",
//                     "condition": "partly-cloudy",
//                     "wind_speed": 0.3,
//                     "wind_gust": 4,
//                     "wind_dir": "nw",
//                     "pressure_mm": 746,
//                     "pressure_pa": 995,
//                     "humidity": 80,
//                     "prec_mm": 0,
//                     "prec_period": 60,
//                     "prec_type": 0,
//                     "prec_strength": 0,
//                     "is_thunder": false,
//                     "cloudness": 0.25,
//                 },
//                 {
//                     "hour": "23",
//                     "hour_ts": 1470254400,
//                     "temp": 17,
//                     "feels_like": 19,
//                     "icon": "ovc_-ra",
//                     "condition": "light-rain",
//                     "wind_speed": 0.9,
//                     "wind_gust": 3.6,
//                     "wind_dir": "nw",
//                     "pressure_mm": 745,
//                     "pressure_pa": 994,
//                     "humidity": 100,
//                     "prec_mm": 0.05,
//                     "prec_period": 60,
//                     "prec_type": 1,
//                     "prec_strength": 0.25,
//                     "is_thunder": false,
//                     "cloudness": 1,
//                 }
//             ]
//         },
//         ...
//             {
//                 "date": "2016-08-10",
//                 "date_ts": 1471035600,
//                 "week": 33,
//                 "sunrise": "04:57",
//                 "sunset": "20:09",
//                 "moon_code": 13,
//                 "moon_text": "moon-code-13",
//                 "parts": {
//                     "night": { ... },
//                     "morning": { ... },
//                     "day": { ... },
//                     "evening": { ... },
//                     "day_short": { ... },
//                     "night_short": { ... }
//                 },
//                 "hours": [...]
//             }
//     ]
// }
// }