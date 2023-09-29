import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up"],
  signInUrl: "/sign-in",
});

export const config = {
  matcher: ["/dayfeed(.*)", "/chat(.*)"],
};

// add "/api/get-token" to matchers when stream is set up
