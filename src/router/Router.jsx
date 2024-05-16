import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../home/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import Login from "../pages/Login";
import Register from "../pages/Register";
import News from "../pages/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: "/news/:id",
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/career",
                element: <Career></Career>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])

export default router;