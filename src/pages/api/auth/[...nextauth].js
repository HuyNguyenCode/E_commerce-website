// import NextAuth from "next-auth";
// import { options } from "../../../../next-auth.config";
// export const handler = NextAuth(options);
// export { handler as GET, handler as POST };

// export default NextAuth({
//   ...options,
//   pages: {
//     signIn: "/auth/signin",
//     signOut: "/auth/signout",
//     error: "/auth/error",
//     verifyRequest: "/auth/verify-request",
//     newUser: null, // Will disable the new account creation screen
//   },
//   providers: [
//     ...options.providers,
//     // Add other providers if needed
//   ],
// });

// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import options from "../../../../next-auth.config";

export default NextAuth({
  options,
  providers: [...options.providers],
});
