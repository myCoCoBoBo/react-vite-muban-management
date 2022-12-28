import Home from "../views/Home"
import { lazy } from 'react'
const Login=lazy(()=>import("../views/login/Index"))
const User = lazy(() => import("../views/User"))
const Page1=lazy(()=>{return import("../views/Page1")})
const Page2=lazy(()=>{return import("../views/Page2")})
const Page301=lazy(()=>{return import("../views/Page301")})
const P404=lazy(()=>import("../views/404"))
//重定向组件
import { Navigate } from "react-router-dom"
const routes = [
    {
        path: "/",
        element: <Navigate to="/page1" />
    },
    
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
            {
                path: "page3/page301",
                element: <Page301 />
            },
            {
                path:"*",
                element: <P404 />
            }
        ]
    },
    {
        path: "/user",
        element: <User />
    },
    {
        path: "/login",
        element: <Login />
    }

]
export default routes