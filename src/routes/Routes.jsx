import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddTouristSpot from "../pages/AddTouristSpot";
import AllTouristSpot from "../pages/AllTouristSpot";
import ViewDetails from "../pages/ViewDetails";
import MyList from "../pages/MyList";
import PrivateRoute from "./PrivateRoute";
import Update from "../pages/Update";
import Bangladesh from "../pages/Bangladesh";
import CountryViewDetails from "../pages/CountryViewDetails";
import Thailand from "../pages/Thailand";
import Indonesia from "../pages/Indonesia";
import Malaysia from "../pages/Malaysia";
import Vietnam from "../pages/Vietnam";
import Cambodia from "../pages/Cambodia";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addTouristSpot',
                element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
            },
            {
                path: '/allTouristSpot',
                element: <AllTouristSpot></AllTouristSpot>,
            },
            {
                path: '/viewDetails/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://travel-pro-server-two.vercel.app/allTouristSpots/${params.id}`)
            },
            {
                path: '/myList',
                element: <PrivateRoute><MyList></MyList></PrivateRoute>
            },
            {
                path: '/update/:id',
                element:<PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params}) => fetch(`https://travel-pro-server-two.vercel.app/allTouristSpots/${params.id}`)
            },
            {
                path: '/countryDetails/:id',
                element: <PrivateRoute><CountryViewDetails></CountryViewDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://travel-pro-server-two.vercel.app/countries/${params.id}`)
            },
            {
                path: '/bangladesh',
                element: <PrivateRoute><Bangladesh></Bangladesh></PrivateRoute>
            },
            {
                path: '/thailand',
                element: <PrivateRoute><Thailand></Thailand></PrivateRoute>
            },
            {
                path: '/indonesia',
                element: <PrivateRoute><Indonesia></Indonesia></PrivateRoute>
            },
            {
                path: '/malaysia',
                element: <PrivateRoute><Malaysia></Malaysia></PrivateRoute>
            },
            {
                path: '/vietnam',
                element: <PrivateRoute><Vietnam></Vietnam></PrivateRoute>
            },
            {
                path: '/cambodia',
                element: <PrivateRoute><Cambodia></Cambodia></PrivateRoute>
            },
        ]
    }
])

export default router;