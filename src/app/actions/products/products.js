"use server";
import { collectionsobj, dbConnect } from "@/app/lib/dbConnect";
export const products=async(limit)=>{
    const productCollection = await dbConnect(collectionsobj.productsCollection)
    const products = await productCollection.find().limit(limit).toArray();
    if(products){
        return {
            success:true,
            products,
        }
    }
    return null;
}