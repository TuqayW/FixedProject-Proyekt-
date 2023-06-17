import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Nav from "../components/Nav";
import OneProductPage from "../pages/OneProductPage";
import Contact from "../pages/ContactPage";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/about',
        element:<AboutPage/>
    },
    {
        path:'/productPage',
        element:<OneProductPage/>
    },
    {
        path:'/contact',
        element:<Contact/>
    }
])