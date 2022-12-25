import router from './router'
import { useRoutes,Link } from 'react-router-dom' 
function App() {
 // const [count, setCount] = useState(0)
const routes=useRoutes(router)
  return (
    <div className="App">  
    {/* <Link to="/home" >Home</Link>|
    <Link to="/about" >about</Link>|
    <Link to="/user" >User</Link> */}
   {routes}
    </div>
  )
}

export default App
