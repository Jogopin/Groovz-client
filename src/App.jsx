import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import ProductsList from "./pages/ProductsList";
import AboutUs from "./pages/AboutUs";
import AddProduct from "./pages/AddProduct";
import Checkout from "./pages/Checkout";
import useProducts from "./hooks/useProducts";
import Success from "./pages/Success";
import Profile from "./pages/ProfilePage/Profile";

function App() {
  const { productsList,addProductAndUpdateState } = useProducts();

  const headphonesList = productsList.filter(
    (item) => item.category === "headphones"
  );
  const speakersList = productsList.filter(
    (item) => item.category === "speakers"
  );
  return (
    <div className="App flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          {/* HOMEPAGE */}
          <Route path="/" element={<Home productsList={productsList} />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* STORE */}
          <Route path="/store" element={<Store />}>
            <Route
              path="headphones"
              index
              element={<ProductsList productsList={headphonesList} />}
            />
            <Route
              path="speakers"
              element={<ProductsList productsList={speakersList} />}
            />
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          {/* Profile */}
          <Route path="/profile" element={<Profile />} />
          {/* Admin routes */}
          <Route path="/add-product" element={<AddProduct addProductAndUpdateState={addProductAndUpdateState}/>} />
        
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
