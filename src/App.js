import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import React, { useState } from 'react';
import { Container, Box } from '@mui/material';

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const moveToWishlist = (item) => {
    setCart(cart.filter((product) => product.id !== item.id));
    setWishlist([...wishlist, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((product) => product.id !== item.id));
  };

  const moveToCart = (item) => {
    setWishlist(wishlist.filter((product) => product.id !== item.id));
    setCart([...cart, item]);
  };

  const removeFromWishlist = (item) => {
    setWishlist(wishlist.filter((product) => product.id !== item.id));
  };

  const addToCart = (item, quantity) => {
    const existingProduct = cart.find((product) => product.id === item.id);

    if (existingProduct) {
      const updatedQuantity = Math.min(existingProduct.quantity + quantity, 10);
      setCart(
        cart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: updatedQuantity }
            : product
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  return (
    <Router>
      <Container>
        <Box mt={4}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route
              path="/product/:id"
              element={<ProductDetails addToCart={addToCart} />}
            />
          </Routes>
          <Cart cart={cart} moveToWishlist={moveToWishlist} removeFromCart={removeFromCart} />
          <Wishlist
            wishlist={wishlist}
            moveToCart={moveToCart}
            removeFromWishlist={removeFromWishlist}
          />
        </Box>
      </Container>
    </Router>
  );
}

export default App;
