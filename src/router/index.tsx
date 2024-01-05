import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import Weather from "../components/weather";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/weather",
        element: <Weather/>
    },
]);


export default router;