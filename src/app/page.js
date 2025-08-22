import React from 'react';
import Hero from './Components/Hero';
import ProductHighlight from './Components/ProductHighlight';
import Footer from './Components/Footer';

const page = () => {
  return (
    <div>
      <Hero/>
      <ProductHighlight/>
      <Footer/>
    </div>
  );
};

export default page;