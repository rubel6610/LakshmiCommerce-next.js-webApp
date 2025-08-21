"use server";

import { collectionsobj, dbConnect } from "@/app/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (data) => {
    try {
        const { email, password } = data;
  if (!email && !password) {
    return {
      success: false,
      message: "Email and password are required",
    };
  }
  const userCollection = await dbConnect(collectionsobj.usersCollection);
  const user = await userCollection.findOne({ email });
  if (!user) {
    return {
      success: false,
      message: "Invalid email or password",
    };
  }
  const isPasswordOk = await bcrypt.compare(password, user.password);

  if (!isPasswordOk) {
    return {
      success: false,
      message: "Invalid email or password",
    };
  }

 const userWithoutPassword = {
      _id: user._id.toString(), // Convert ObjectId to string
      name: user.name,
      email: user.email,
      photourl: user.photourl,
      createdAt: user.createdAt
    };

    return {
      success: true,
      message: "Login successful",
      user: userWithoutPassword
    };
    } catch (error) {
         console.error("Login error:", error);
    return {
      success: false,
      message: "An error occurred during login"
    };
    }
  
};
