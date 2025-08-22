"use client";
import { useState } from 'react';
import { FaShoppingCart, FaSpinner } from 'react-icons/fa';

const AddToCartButton = ({ product }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    // Simulate API call or cart logic
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Added to cart:', product);
    setIsLoading(false);
    // You can add toast notification here
  };

  return (
    <button 
      onClick={handleAddToCart}
      disabled={isLoading}
      className="btn btn-primary flex-1 gap-2"
    >
      {isLoading ? (
        <FaSpinner className="animate-spin" />
      ) : (
        <FaShoppingCart />
      )}
      {isLoading ? 'Adding...' : 'Add to Cart'}
    </button>
  );
};

export default AddToCartButton;