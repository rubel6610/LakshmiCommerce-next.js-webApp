
import NextAuth from "next-auth";
import { loginUser } from "@/app/actions/auth/loginUser";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import { collectionsobj, dbConnect } from "@/app/lib/dbConnect";

export const authOptions = {
 providers: [
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      email: { label: "Email", type: "text", placeholder: "Email" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
        const result = await loginUser(credentials);
        

      // If no error and we have user data, return it
       if (result.success && result.user) {
            return {
              id: result.user._id, 
              email: result.user.email,
              name: result.user.name,
              image: result.user.photourl,
              ...result.user 
            };
          }
      // Return null if user data could not be retrieved
      return null
    }
  }),
   GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }),
  
],
 secret: process.env.NEXTAUTH_SECRET,
  trustHost: true, // ← This is crucial for Vercel
  debug: process.env.NODE_ENV === 'development',
pages:{
    signIn:"/login"
},
callbacks:{
  async signIn({account,user}){
    if(account){
      const {providerAccountId,provider}=account;
      const {email,image,name}=user;
      const userCollection =await dbConnect(collectionsobj.usersCollection);
      const isExistUser =await userCollection.findOne({email});
      if(!isExistUser){
        const payload ={providerAccountId,provider,email,image,name};
        await userCollection.insertOne(payload)
      }
    }
    return true;
  }
  
}

}



const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}