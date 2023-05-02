import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import ChefCard from "../Pages/Home/ChefCard/ChefCard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:':id',
                element:<ChefDetails></ChefDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    }
])
export default router;