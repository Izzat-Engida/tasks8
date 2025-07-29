import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";


declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
    };
    accessToken: string;
    refreshToken: string;
  }

  interface User {
    id: string;
    email: string;
    name: string;
    accessToken: string;
    refreshToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    accessToken: string;
    accessTokenExpires?: number;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) { //weird thing here i used axios instead of fetch and it did not work
          const res = await fetch("https://akil-backend.onrender.com/login", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
              email:credentials?.email,
              password:credentials?.password,
            })})
            const data=await res.json();
            console.log("login ",data)
            if(data.success && data.data?.accessToken){
              return{
                id:data.data.id,
                email:credentials?.email,
                accessToken:data.data.accessToken,
                refreshToken:data.data.refreshToken,
              }
            }
        
            return null;
         
      },
    }),
  ],
  session:{
    strategy:"jwt",
  },
  pages: {
    signIn: "/", 
    error: "/api/auth/error", 
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = Date.now() + 3600 * 1000; 
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id as string;
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
