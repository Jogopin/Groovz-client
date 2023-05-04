import { Route,  Routes } from "react-router-dom"
import { Footer, Navbar } from "./components"
import Home from "./pages/Home"
import Store from "./pages/Store"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* HOMEPAGE */}
        <Route path="/" element={<Home/>}/>
        {/* STORE */}
        <Route path="/store/*" element={<Store/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
