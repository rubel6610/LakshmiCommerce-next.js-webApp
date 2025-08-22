"use client";
import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

const BuyNowButton = ({ product }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyNow = async () => {
    setIsLoading(true);
    // Simulate buy now logic
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Buy now:', product);
    setIsLoading(false);
    // Redirect to checkout page
  };

  return (
    <button 
      onClick={handleBuyNow}
      disabled={isLoading}
      className="btn btn-outline btn-primary gap-2"
    >
      {isLoading && <FaSpinner className="animate-spin" />}
      {isLoading ? 'Processing...' : 'Buy Now'}
    </button>
  );
};

export default BuyNowButton;