import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import BreakingNews from "../pages/BreakingNews/BreakingNews";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SingleNews from "../pages/SingleNews/SingleNews";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                loader: ()=> fetch("/news.json"),
                element: <Home/>
            },
            {
                path: "/breakingNews",
                loader: ()=>fetch("/news.json"),
                element: <BreakingNews/>
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path:"/news/:id",
                element: <PrivateRoute><SingleNews/></PrivateRoute>
            }
        ]
    }
])

export default router