import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({});

export const config = {
  matcher: ["/dayfeed(.*)"],
};

// add "/api/get-token" to matchers when stream is set up
