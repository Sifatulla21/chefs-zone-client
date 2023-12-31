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
import Blog from "../Pages/Blog/Blog";
import Terms from "../Pages/Terms/Terms";

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
                loader: ({params}) => fetch(`https://chefs-zone-server-sifatulla21.vercel.app/chef/${params.id}`)
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
            },
            {
                path:'blog',
                element:<Blog></Blog>
            }, 
            {
                path:'terms',
                element:<Terms></Terms>
            } 
        ]},
    {
        path: '*',
        element:<Error></Error>
    } 
])
export default router;