import { loginUser } from "@/app/actions/auth/loginUser";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

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
              id: result.user._id, // NextAuth expects 'id' field
              email: result.user.email,
              name: result.user.name,
              image: result.user.photourl,
              ...result.user // spread other user properties
            };
          }
      // Return null if user data could not be retrieved
      return null
    }
  })
],
pages:{
    signIn:"/login"
}
}
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}