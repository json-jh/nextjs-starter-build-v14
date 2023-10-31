import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";

const {
  NEXTAUTH_SECRET = '',
  GITHUB_ID = '',
  GITHUB_SECRET = '',
  EMAIL_SERVER = '',
  EMAIL_FROM = '',
  NAVER_CLIENT_ID = '',
  NAVER_CLIENT_SECRET = '',
  KAKAO_CLIENT_ID = '',
  KAKAO_CLIENT_SECRET = ''
} = process.env

export const authOptions = {
  secret: NEXTAUTH_SECRET,
  providers: [
    NaverProvider({
      clientId: NAVER_CLIENT_ID,
      clientSecret: NAVER_CLIENT_SECRET
    }),
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET
    }),
    KakaoProvider({
      clientId: KAKAO_CLIENT_ID,
      clientSecret: KAKAO_CLIENT_SECRET
    })
    /**
     * https://next-auth.js.org/configuration/providers/email
     */
    // EmailProvider({
    //   server: EMAIL_SERVER,
    //   from: EMAIL_FROM
    //   // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    // })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return {
        provider: account?.provider,
        ...token
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    session({ session, user, token }) {
      return {
        provider: token.provider,
        ...session
      }
    }
  }
  // pages: {
  //   signIn: '/signin',
  //   signOut: '/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // }
} satisfies NextAuthOptions

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };

