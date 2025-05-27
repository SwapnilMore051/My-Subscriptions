import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const itemCount = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white">
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
        <img src="/logo.png" alt="Logo" className="h-10" />
        <h1 className="text-xl font-bold">Paradise Nursery</h1>
      </div>
      <span className="italic text-gray-600">Greenify your space with us!</span>
      <div className="cursor-pointer relative" onClick={() => navigate("/cart")}>
        🛒
        <span className="absolute -top-2 -right-2 text-xs bg-green-600 text-white rounded-full px-2">
          {itemCount}
        </span>
      </div>
    </header>
  );
}