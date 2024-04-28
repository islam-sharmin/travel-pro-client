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
                element: <AddTouristSpot></AddTouristSpot>
            },
            {
                path: '/allTouristSpot',
                element: <AllTouristSpot></AllTouristSpot>,
                loader: () => fetch('http://localhost:5000/allTouristSpots')
            },
            {
                path: '/viewDetails/:id',
                element: <ViewDetails></ViewDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/allTouristSpots/${params.id}`)
            },
            {
                path: '/myList',
                element: <PrivateRoute><MyList></MyList></PrivateRoute>
            },
            {
                path: '/update/:id',
                element:<PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/allTouristSpots/${params.id}`)
            }
        ]
    }
])

export default router;