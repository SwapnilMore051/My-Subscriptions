import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[url('/background.jpg')] bg-cover flex flex-col items-center justify-center text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Paradise Nursery</h1>
      <p className="max-w-lg mb-6">
        Welcome to Paradise Nursery – your one-stop destination for beautiful,
        air-purifying, and aromatic houseplants. Brighten your space and boost
        your mood with our curated selection.
      </p>
      <button
        onClick={() => navigate("/products")}
        className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full"
      >
        Get Started
      </button>
    </div>
  );
}