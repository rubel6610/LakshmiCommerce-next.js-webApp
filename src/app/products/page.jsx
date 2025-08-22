export const dynamic = 'force-dynamic';
export const revalidate = 30;
import React from 'react';
import Image from 'next/image';
import { FaEye } from 'react-icons/fa';
import Link from 'next/link';
import { products } from '../actions/products/products';

const ProductsPage = async() => {
const result = await products(0);
  return (
    <div className="min-h-screen bg-base-200 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Premium Products</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our collection of high-quality traditional products, carefully sourced and processed for the best experience.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {result.products.map((product) => (
            <div
              key={product._id}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-base-300/50"
            >
              {/* Product Image */}
              <figure className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt="product image"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </figure>

              {/* Card Content */}
              <div className="card-body p-5">
                {/* Product Name */}
                <h2 className="card-title text-lg font-semibold text-base-content line-clamp-1">
                  {product.name}
                </h2>

                {/* Product Description */}
                <p className="text-base-content text-sm line-clamp-2 mb-4">
                  {product.description}
                </p>

                {/* Price and Action Section */}
                <div className="card-actions flex items-center justify-between mt-auto">
                  {/* Price */}
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}<span className='text-xs'>BDT</span>
                    </span>
                  
                  </div>

                  {/* Details Button */}
                  <Link href={`/products/${product._id}`} className="btn btn-primary btn-sm gap-2">
                    <FaEye className="text-sm" />
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default ProductsPage;