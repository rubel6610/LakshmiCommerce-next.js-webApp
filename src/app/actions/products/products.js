"use server";

import { collectionsobj, dbConnect } from "@/app/lib/dbConnect";

export const products=async()=>{
    const productCollection = await dbConnect(collectionsobj.productsCollection)
    const products = await productCollection.find().limit(4).toArray();
    if(products){
        return {
            success:true,
            products,
        }
    }
    return null;
}