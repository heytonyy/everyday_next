import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up"],
  signInUrl: "/sign-in",
});

export const config = {
  matcher: ["/dayfeed(.*)", "/chat(.*)", "/api/get-user"],
};
