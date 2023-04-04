import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Champions from "./pages/Champions";
import Search from "./pages/Search";
import UserInformation from "./pages/User";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import CartPage from "./pages/CartPage";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/champions" element={<Champions />} />
          <Route path="/news" element={<div>News</div>} />
          <Route path="/search" element={<Search />} />
          <Route path="/user/:username" element={<UserInformation />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
