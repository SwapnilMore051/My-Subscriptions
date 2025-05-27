import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (plant) => {
    setCart((prev) => ({
      ...prev,
      [plant.id]: { ...plant, quantity: 1 },
    }));
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) => {
      const updated = { ...prev };
      updated[id].quantity += delta;
      if (updated[id].quantity <= 0) delete updated[id];
      return updated;
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};