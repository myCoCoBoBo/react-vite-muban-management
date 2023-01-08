import router from './router'
import { useRoutes, Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import { message } from "antd"
function ToLogin() {
  const navigate = useNavigate()
  useEffect(() => {
    //加载完组件之后执行这里的代码
    navigate("/login")

    message.warning("您还没有登录，请先登录")
  }, [])
  return <div></div>
}

function ToPage1() {
  const navigate = useNavigate()
  useEffect(() => {
    //加载完组件之后执行这里的代码
    message.info("您已经登录，无需回到登录页面")
    navigate("/page1")
  }, [])
  return <div></div>
}
function BeforeRouterEnter() {
  const routes = useRoutes(router)
  const location = useLocation()
  let token = localStorage.getItem("vite-management-token")

 

  if (location.pathname === "/login" && token) {
    return <ToPage1 />
  }
  if (location.pathname !== "/login" && !token) {
    return <ToLogin />
  }
  return routes
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Link to="/home" >Home</Link>|
    <Link to="/about" >about</Link>|
    <Link to="/user" >User</Link> */}
      <BeforeRouterEnter />
    </div>
  )
}

export default App
