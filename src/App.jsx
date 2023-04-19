import { Route,  Routes } from "react-router-dom"
import { Footer, Navbar } from "./components"
import Home from "./pages/Home"
import Store from "./pages/Store"

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* HOMEPAGE */}
        <Route path="/" element={<Home/>}/>
        {/* STORE */}
        <Route path="/store/*" element={<Store/>} />
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
