import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "utils/firebase";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.FIREBASE_GOOGLE_CLIENT_ID, // Firebase Web Client ID
      clientSecret: "", // Firebase doesn't require a secret for client-side auth
    }),
  ],
  callbacks: {
    async signIn({ account }) {
      if (account.provider === "google") {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        
        if (!user) {
          throw new Error("Google authentication failed.");
        }
        return true; // Allow sign-in
      }
      return false;
    },
    async jwt({ token, user }) {
      if (user) {
        token.uid = user.uid;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.uid;
      session.user.email = token.email;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Export NextAuth API routes
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
