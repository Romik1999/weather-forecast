import React from 'react';
import {useRoutes} from "react-router-dom";
import Home from "../pages/home";
import Weather from "../components/weather";

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/weather',
            element: <Weather/>
        }
    ])
};

export default Router;