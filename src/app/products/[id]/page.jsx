import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft,} from 'react-icons/fa';
import AddToCartButton from './Components/AddToCartButton';
import BuyNowButton from './Components/BuyNowButton';
import { findProduct } from '@/app/actions/products/findProduct';

const ProductDetailsPage = async ({ params }) => {
  const product = await findProduct(params.id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-error mb-4">Product not found</h2>
          <Link href="/products" className="btn btn-primary">
            Go Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100">
      {/* Navigation */}
      <div className="bg-base-200 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/products" className="btn btn-ghost btn-sm gap-2">
            <FaChevronLeft />
            Back to Products
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="flex justify-center">
            <div className="relative h-96 w-full lg:h-[600px] lg:w-[500px] rounded-lg overflow-hidden bg-base-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <h1 className="text-3xl lg:text-4xl font-bold text-base-content mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">
                ₹{product.price}
              </span>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-base-200 rounded-lg">
              <div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Weight:</span>
                <p className="font-medium">{product.weight}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Origin:</span>
                <p className="font-medium">{product.origin}</p>
              </div>
            </div>

            {/* Action Buttons - Client Components */}
            <div className="flex gap-4">
              <AddToCartButton product={product} />
              <BuyNowButton product={product} />
            </div>
          </div>
        </div>

     
      </div>
    </div>
  );
};

export default ProductDetailsPage;