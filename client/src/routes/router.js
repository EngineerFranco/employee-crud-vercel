import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Employee from "../pages/Employee";
import About from "../pages/About";
import Add from "../pages/Add";
import Update from "../pages/Update";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/employee",
                element: <Employee/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/employee/add",
                element: <Add/>
            },
            {
                path: "/employee/edit/:id",
                element: <Update/>
            },
        ]
    }
])


export default router;