"use server";

import { collectionsobj, dbConnect } from "@/app/lib/dbConnect";

export const addProduct = async (productData) => {
  try {
    const productCollection = await dbConnect(
      collectionsobj.productsCollection
    );
    const newProducts = {
      ...productData,
      createdAt: new Date(),
    };
    const result = await productCollection.insertOne(newProducts);
    return {
      success: true,
      message: "Product added successfully",
      productId: result.insertedId.toString(),
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to add product",
      error: error.message,
    };
  }
};
