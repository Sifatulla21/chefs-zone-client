import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LoginLayout from "../Layout/LoginLayout";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import Error from "../Pages/Error/Error";
import ChefCard from "../Pages/Home/ChefCard/ChefCard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DetailsLayout from "../Layout/DetailsLayout";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }   
        ]
    },
    {
        path:'details',
        element:<DetailsLayout></DetailsLayout>,
        children:[
            {
                path:':id',
                element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute> ,
                loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
            }  
        ]
    },
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]},
    {
        path: '*',
        element:<Error></Error>
    } 
])
export default router;