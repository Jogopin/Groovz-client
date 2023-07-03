import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import ProductsList from "./pages/ProductsList";
import demoProducts from "./assets/data/demoProducts";
import AboutUs from "./pages/AboutUs";
import { useEffect, useState } from "react";
import axios from "axios";
import AddProduct from "./pages/AddProduct";

function App() {

  const [productsList, setProductsList ] = useState(null)

  // fetch all products from API
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/products`)
    .then((response)=>{
      setProductsList(response.data)
    })
    .catch((error)=>{
      console.log(`Error getting the list of products, `,error)
    })
  },[])

  return (
    <div className="App flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          {/* HOMEPAGE */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs/>}/>
          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* STORE */}
          <Route path="/store" element={<Store />}>
            <Route
              path="headphones"
              index
              element={<ProductsList productsList={productsList} />}
            />
            <Route
              path="speakers"
              element={<ProductsList productsList={demoProducts} />}
            />
            <Route path=":productId" element={<Product />} />
          </Route>
          {/* Admin routes */}
          <Route path="/add-product" element={<AddProduct/>}/>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
