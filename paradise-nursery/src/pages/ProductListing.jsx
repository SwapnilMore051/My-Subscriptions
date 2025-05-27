import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../components/Header";
import plants from "../data/plants";

export default function ProductListing() {
  const { cart, addToCart } = useContext(CartContext);
  return (
    <div>
      <Header />
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <div key={plant.id} className="border rounded p-4">
            <img src={plant.image} alt={plant.name} className="w-full h-48 object-cover" />
            <h2 className="text-xl font-semibold">{plant.name}</h2>
            <p className="text-gray-600">{plant.description}</p>
            <p className="text-green-600 font-bold">${plant.price}</p>
            <button
              onClick={() => addToCart(plant)}
              disabled={cart[plant.id]}
              className={\`mt-2 w-full px-4 py-2 rounded \${cart[plant.id] ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"} text-white\`}
            >
              {cart[plant.id] ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}