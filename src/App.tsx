import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { FoodDetail } from './pages/FoodDetail';
import { Account } from './pages/Account';
import { Checkout } from './pages/Checkout';
import { Restaurants } from './pages/Restaurants';
import { RestaurantDetail } from './pages/RestaurantDetail';
import { OrderDetail } from './pages/OrderDetail';
import { Layout } from './components/Layout';
import { CartProvider } from './contexts/CartContext';
import { CartSidebar } from './components/CartSidebar';
export function App() {
  return <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout>
                <Home />
              </Layout>} />
          <Route path="/shop" element={<Layout>
                <Shop />
              </Layout>} />
          <Route path="/food/:id" element={<Layout>
                <FoodDetail />
              </Layout>} />
          <Route path="/account" element={<Layout>
                <Account />
              </Layout>} />
          <Route path="/checkout" element={<Layout>
                <Checkout />
              </Layout>} />
          <Route path="/restaurants" element={<Layout>
                <Restaurants />
              </Layout>} />
          <Route path="/restaurant/:id" element={<Layout>
                <RestaurantDetail />
              </Layout>} />
          <Route path="/order/:id" element={<Layout>
                <OrderDetail />
              </Layout>} />
        </Routes>
        <CartSidebar />
      </BrowserRouter>
    </CartProvider>;
}