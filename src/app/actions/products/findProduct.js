"use server";

import { collectionsobj, dbConnect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

export const findProduct = async (id) => {
  try {
    const filter = { _id: new ObjectId(id) };
    const productCollection = await dbConnect(collectionsobj.productsCollection);
    const product = await productCollection.findOne(filter);
    
    if (product) {
      return {
        ...product,
        _id: product._id.toString()
      };
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};