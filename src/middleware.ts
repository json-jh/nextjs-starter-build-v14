import withAuth from "next-auth/middleware"

export const config = {
  /**
   * https://nextjs.org/docs/messages/invalid-route-source
   * 
   * matcher: ["/"]
   */
}

/**
 * https://next-auth.js.org/configuration/nextjs#prerequisites
 */
export { default } from "next-auth/middleware"

/**
 * https://next-auth.js.org/configuration/nextjs#pages
 */
// export default withAuth(
//   function middleware(req) {
//   }, {
//     callbacks: {
//       authorized({ req, token }) {
//         return true
//       }
//     }
//   }
// )