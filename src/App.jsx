import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import HomePage from "./pages/HomePage/HomePage";
import Store from "./pages/Store";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductsList from "./pages/ProductsList";
import AboutUs from "./pages/AboutUs";
import AddProduct from "./pages/AddProduct";
import Checkout from "./pages/Checkout";
import useProductLists from "./hooks/useProductList";
import Success from "./pages/Success";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { Toaster } from "react-hot-toast";
import IsPrivate from "./components/IsPrivate";
import IsAdmin from "./components/IsAdmin";

function App() {
  const { productsList, addProductAndUpdateState } = useProductLists();

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
          <Route path="/" element={<HomePage productsList={productsList} />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* STORE */}
          <Route path="/store" element={<Store />}>
            <Route
              index
              element={<ProductsList productsList={productsList} />}
            />
            <Route
              path="headphones"
              element={<ProductsList productsList={headphonesList} />}
            />
            <Route
              path="speakers"
              element={<ProductsList productsList={speakersList} />}
            />
            <Route path=":productId" element={<ProductPage />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          {/* Profile */}

          <Route
            path="/profile"
            element={
              <IsPrivate>
                <ProfilePage />
              </IsPrivate>
            }
          />
          {/* Admin routes */}
          <Route
            path="/add-product"
            element={
              <IsAdmin>
                <AddProduct
                  addProductAndUpdateState={addProductAndUpdateState}
                />
              </IsAdmin>
            }
          />
        </Routes>
      </div>
      <Footer />
      <Toaster
        toastOptions={{
          duration: 5000,
        }}
      />
    </div>
  );
}

export default App;
