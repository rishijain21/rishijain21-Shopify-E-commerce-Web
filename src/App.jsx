import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Shop from './pages/shop';
import ShopCategory from './pages/shopCategory';
import Product from './pages/products';
import Cart from './pages/cart';
import LoginSignup from './pages/loginsignup';
import Foooter from './components/footer/Foooter';
import men_banner from './assets/banner.jpg';
import women_banner from './assets/women_banner.avif';
import kids_banner from './assets/kids_banner.jpg';

function App() { 
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner = {men_banner} category ="men" />} />
          <Route path="/women" element={<ShopCategory banner= {women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner ={kids_banner} category="kid" />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
       <Foooter/>

      </BrowserRouter>
    </div>
  );
}

export default App;
