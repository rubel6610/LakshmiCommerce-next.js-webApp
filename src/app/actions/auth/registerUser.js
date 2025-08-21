"use server";
import { collectionsobj, dbConnect } from "@/app/lib/dbConnect";
import bcrypt from "bcrypt";
export const registerUser = async (data) => {
  try {
    const { name, email, password, photourl } = data;

    const usersCollection = await dbConnect(collectionsobj.usersCollection);
    const existUser = await usersCollection.findOne({ email: email });
    if (existUser) {
      return {
        success: false,
        message: "Email already registered",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      name,
      email,
      photourl,
      createdAt: new Date(),
      password: hashedPassword,
    };

    const result = await usersCollection.insertOne(newUser);
    return {
      success: true,
      message: "User registered successfully",
      insertedId: result.insertedId.toString(),
    };
  } catch (error) {
    console.error("Error registering user:", error);
    return {
      success: false,
      message: "Failed to register user",
      error: error.message,
    };
  }
};
