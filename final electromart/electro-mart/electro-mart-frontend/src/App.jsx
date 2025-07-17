// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductPage from './pages/ProductPage';
import BuyerHome from './pages/BuyerHome';
import SellerHome from './pages/SellerHome';
import SellerProductsPage from './pages/SellerProductsPage';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import BuyerProductPage from './pages/BuyerProductPage';
import CartPage from './pages/CartPage';
import About from './pages/About';
import LandingPage from './pages/LandingPage';

function AppContent() {
  const location = useLocation();


  const hideHeaderFooter = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <main className="min-h-[calc(100vh-8rem)]">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/buyer/home" element={<BuyerHome />} />
          <Route path="/seller/home" element={<SellerHome />} />
          <Route path="/seller/products" element={<SellerProductsPage />} />
          <Route path="/seller/add-product" element={<AddProduct />} />
          <Route path="/seller/edit-product/:id" element={<EditProduct />} />
          <Route path="/buyer/products" element={<BuyerProductPage />} />
          <Route path="/buyer/cart" element={<CartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div className="text-center py-10">Page Not Found</div>} />
        </Routes>
      </main>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
