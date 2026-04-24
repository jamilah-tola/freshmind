import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

import { authorizeAdminCredentials } from "@/lib/freshmind/admin-credentials"

export const { auth, handlers, signIn, signOut } = NextAuth({
  trustHost: process.env.AUTH_TRUST_HOST === "true",
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
  },
  providers: [
    Credentials({
      name: "Freshmind Admin",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: authorizeAdminCredentials,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id
        token.role = (user as { role?: string }).role ?? "admin"
      }

      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub ?? ""
        session.user.role = typeof token.role === "string" ? token.role : "admin"
      }

      return session
    },
  },
})
