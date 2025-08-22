"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight, FaShoppingCart, FaStar } from 'react-icons/fa';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample carousel data relevant to your supari/e-commerce site
  const carouselItems = [
    {
      id: 1,
      title: "Premium Organic Green Coconut",
      description: "Experience the finest quality areca nuts sourced directly from sustainable farms in South India.",
      image: "https://us.lakpura.com/cdn/shop/articles/Cocount.jpg?v=1718091709",
      price: "₹20",
      oldPrice: "₹25",
      discount: "20% OFF",
      rating: 4.8,
      reviews: 142,
      ctaText: "Shop Now",
      ctaLink: "/products"
    },
    {
      id: 2,
      title: "Traditional Betel Nut Collection",
      description: "Authentic betel nuts with rich flavor and aroma. Perfect for traditional ceremonies.",
      image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=1200&h=600&fit=crop",
      price: "₹45",
      oldPrice: "₹55",
      discount: "18% OFF",
      rating: 4.7,
      reviews: 89,
      ctaText: "Explore Collection",
      ctaLink: "/products"
    },
    {
      id: 3,
      title: "Fresh Areca Nut Packages",
      description: "Freshly harvested areca nuts packaged for maximum freshness and longevity.",
      image: "https://as1.ftcdn.net/v2/jpg/03/77/14/40/1000_F_377144015_dFUVAj61q3XHMSUIf2sqK1MX2qMj34sW.jpg",
      price: "₹30",
      oldPrice: "₹35",
      discount: "14% OFF",
      rating: 4.9,
      reviews: 201,
      ctaText: "Buy Now",
      ctaLink: "/products"
    },
  
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[500px] overflow-hidden rounded-xl">
      {/* Carousel Slides */}
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="relative w-full h-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 flex items-center h-full">
              <div className="max-w-6xl mx-auto px-4 md:px-8 text-white">
                <div className="max-w-2xl space-y-6">
                  {/* Discount Badge */}
                  {item.discount && (
                    <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-bold rounded-full mb-4">
                      {item.discount}
                    </span>
                  )}
                  
                  {/* Title */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {item.title}
                  </h1>
                  
                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-200 max-w-md">
                    {item.description}
                  </p>
                  
                  {/* Price and Rating */}
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-primary">{item.price}</span>
                      {item.oldPrice && (
                        <span className="text-xl text-gray-300 line-through">{item.oldPrice}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span className="font-semibold">{item.rating}</span>
                      <span className="text-gray-300">({item.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Link
                    href={item.ctaLink}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 mt-6"
                  >
                    <FaShoppingCart />
                    {item.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-20"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={20} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-20"
        aria-label="Next slide"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-primary' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{
            width: `${(100 / carouselItems.length) * (currentSlide + 1)}%`
          }}
        />
      </div>
    </div>
  );
};

export default Hero;