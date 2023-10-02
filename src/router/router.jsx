import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import BreakingNews from "../pages/BreakingNews/BreakingNews";
import About from "../pages/About/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/breakingNews",
                element: <BreakingNews/>
            },
            {
                path: "/about",
                element: <About/>,
            }
        ]
    }
])

export default router