"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useForm, useFieldArray } from 'react-hook-form';
import { FaSpinner, FaPlus, FaTrash } from 'react-icons/fa';
import { addProduct } from '@/app/actions/products/addProducts';
import Swal from 'sweetalert2';

const AddProductPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      price: '',
      weight: '',
      origin: '',
      image: '',
      features: [{ value: '' }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "features"
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login?callbackUrl=/dashboard/add-product');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return null;
  }

  const onSubmit = async (data) => {
    try {
      const filteredFeatures = data.features
        .map(f => f.value.trim())
        .filter(value => value !== '');

      const productData = {
        ...data,
        price: parseFloat(data.price),
        features: filteredFeatures,
        inStock: true
      };

    const res =   await addProduct(productData);
    if(res.success){
          Swal.fire({
        title: "✅ Product Added!",
        text: "Your product has been successfully added.",
        icon: "success",
        showConfirmButton: false,
        timer: 2000, 
      });
        reset();
        router.push('/products');
    }else {
      
      Swal.fire({
        title: "❌ Failed!",
        text: res.message || "Something went wrong while adding product.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
         
    } catch (error) {
      console.error('Error adding product:', error);
        Swal.fire({
      title: "⚠️ Error",
      text: error.message || "An unexpected error occurred.",
      icon: "error",
      confirmButtonColor: "#d33",
    });
    }
  };

  return (
    <div className="min-h-screen bg-base-300 py-10">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-primary mb-3">
            Add New Product
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Fill in the details below to add a new product to your store
          </p>
        </div>

        {/* Form Card */}
        <div className="card bg-base-100 shadow-2xl border border-base-300">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Product Name */}
              <div>
                <label className="label font-semibold">Product Name *</label>
                <input
                  type="text"
                  {...register("name", { 
                    required: "Product name is required",
                    minLength: { value: 2, message: "At least 2 characters" }
                  })}
                  placeholder="Enter product name"
                  className="input input-bordered w-full"
                />
                {errors.name && (
                  <p className="text-error text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="label font-semibold">Description *</label>
                <textarea
                  {...register("description", { 
                    required: "Description is required",
                    minLength: { value: 10, message: "At least 10 characters" }
                  })}
                  placeholder="Enter product description"
                  className="textarea textarea-bordered w-full h-28 resize-none"
                />
                {errors.description && (
                  <p className="text-error text-sm mt-1">{errors.description.message}</p>
                )}
              </div>

              {/* Price & Weight */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label font-semibold">Price (Tk) *</label>
                  <input
                    type="number"
                    step="0.01"
                    {...register("price", { 
                      required: "Price is required",
                      min: { value: 0.01, message: "Must be greater than 0" }
                    })}
                    placeholder="0.00"
                    className="input input-bordered w-full"
                  />
                  {errors.price && (
                    <p className="text-error text-sm mt-1">{errors.price.message}</p>
                  )}
                </div>

                <div>
                  <label className="label font-semibold">Weight *</label>
                  <input
                    type="text"
                    {...register("weight", { required: "Weight is required" })}
                    placeholder="e.g., 100g, 250g, 1kg"
                    className="input input-bordered w-full"
                  />
                  {errors.weight && (
                    <p className="text-error text-sm mt-1">{errors.weight.message}</p>
                  )}
                </div>
              </div>

              {/* Origin */}
              <div>
                <label className="label font-semibold">Origin *</label>
                <input
                  type="text"
                  {...register("origin", { required: "Origin is required" })}
                  placeholder="Enter product origin"
                  className="input input-bordered w-full"
                />
                {errors.origin && (
                  <p className="text-error text-sm mt-1">{errors.origin.message}</p>
                )}
              </div>

              {/* Image URL */}
              <div>
                <label className="label font-semibold">Image URL *</label>
                <input
                  type="url"
                  {...register("image", { 
                    required: "Image URL is required",
                    pattern: { value: /^(https?:\/\/).+$/, message: "Enter valid URL" }
                  })}
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full"
                />
                {errors.image && (
                  <p className="text-error text-sm mt-1">{errors.image.message}</p>
                )}
              </div>

              {/* Features */}
              <div>
                <label className="label font-semibold">Features</label>
                <div className="space-y-3">
                  {fields.map((field, index) => (
                    <div key={field.id} className="flex gap-3">
                      <input
                        type="text"
                        {...register(`features.${index}.value`)}
                        placeholder={`Feature ${index + 1}`}
                        className="input input-bordered flex-1"
                      />
                      {fields.length > 1 && (
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="btn btn-error btn-square"
                        >
                          <FaTrash />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => append({ value: '' })}
                    className="btn btn-outline btn-sm mt-2"
                  >
                    <FaPlus className="mr-2" />
                    Add Feature
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-block text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Adding Product...
                    </>
                  ) : (
                    <>
                      <FaPlus className="mr-2" />
                      Add Product
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
