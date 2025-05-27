import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../components/Header";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const items = Object.values(cart);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Header />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {items.map((item) => (
          <div key={item.id} className="flex items-center mb-4 border p-4 rounded">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mr-4" />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p>${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
              <div className="flex items-center gap-2 mt-2">
                <button onClick={() => updateQuantity(item.id, -1)} className="bg-red-500 px-2 text-white">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="bg-green-500 px-2 text-white">+</button>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 bg-gray-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
        <div className="mt-6 text-right">
          <p className="text-lg font-semibold">Total Items: {items.reduce((acc, item) => acc + item.quantity, 0)}</p>
          <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">Checkout</button>
        </div>
      </div>
    </div>
  );
}