import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({});

export const config = {
  matcher: ["/dayfeed(.*)", "/chat(.*)", "/api/users/(.*)", "/api/days/(.*)"],
};

// export default authMiddleware({
//   publicRoutes: ["/", "/sign-in", "/sign-up"],
//   signInUrl: "/sign-in",
// });
