import Home from "../views/Home"
import { lazy } from 'react'
const About = lazy(() => import("../views/About"))
const User = lazy(() => import("../views/User"))
const Page1=lazy(()=>{return import("../views/Page1")})
const Page2=lazy(()=>{return import("../views/Page2")})
//重定向组件
import { Navigate } from "react-router-dom"
const routes = [
    {
        path: "/",
        element: <Navigate to="/page1" />
    },
    // {
    //     path: "/about",
    //     element: <About />
    // },
    {
        path: "/*",
        element: <Home />,
        children:[
            {
                path: "page1",
                element: <Page1 />
            },
            {
                path: "page2",
                element: <Page2 />
            },
        ]
    },
    {
        path: "/user",
        element: <User />
    }

]
export default routes