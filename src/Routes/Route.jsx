import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path: '/',
                element:<Main></Main>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path: 'register',
                element:<Register></Register>
            }
        ]
    }
        
])

export default router;