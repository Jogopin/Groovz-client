import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import ProductsList from "./pages/ProductsList";
import demoProducts from "./assets/data/demoProducts";

function App() {
  return (
    <div className="App flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          {/* HOMEPAGE */}
          <Route path="/" element={<Home />} />
          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* STORE */}
          <Route path="/store" element={<Store />}>
            <Route
              path="headphones"
              index
              element={<ProductsList productsList={demoProducts} />}
            />
            <Route
              path="speakers"
              element={<ProductsList productsList={demoProducts} />}
            />
            <Route path=":productId" element={<Product />} />
          </Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
