import React from 'react';
import { products } from '../actions/products/products';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const ProductHighlight = async () => {
  const result = await products(4);
  
  if (!result?.success || !result.products || result.products.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-600">No products found</h2>
      </div>
    );
  }

  return (
    <div className="py-12 bg-base-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover our most popular and trending products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {result.products.map((product) => (
            <div
              key={product._id}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {/* Product Image */}
              <figure className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </figure>

              {/* Product Info */}
              <div className="card-body p-4">
                <h3 className="card-title text-lg font-semibold line-clamp-1">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-2">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-primary">
                    ₹{product.price}
                  </span>
                  {product.rating && (
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Link
                  href={`/products/${product._id}`}
                  className="btn btn-primary btn-sm gap-2"
                >
                  <FaShoppingCart />
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link href="/products" className="btn btn-outline btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlight;