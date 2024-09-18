import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/auth";
import SignUp from "./pages/auth/signup";
import LogIn from "./pages/auth/login";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Products from "./pages/products";
import ProdutsDetails from "./pages/productsDetails";
import Orders from "./pages/orders";
import AddToCart from "./pages/carts";
import NotFound from "./pages/notFound";
import AboutUs from "./pages/aboutUs";
import Profile from "./pages/profile";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth">
            <Route index element={<Auth />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LogIn />} />
          </Route>

          <Route path="/" element={<Dashboard />} >
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProdutsDetails />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<AddToCart />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;

// {/* <> </> */}
// () => {}
// :