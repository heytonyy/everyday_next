import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

interface RuntimeEnv {
  NEXT_PUBLIC_STREAM_KEY: string;
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
  MONGODB_URI: string;
  AWS_S3_ACCESS_KEY: string;
  AWS_S3_SECRET_KEY: string;
}

// use zod to validate the environment variables and create a type-safe env object
// createEnv will throw an error if any of the environment variables are missing
export const env = createEnv({
  server: {
    STREAM_SECRET: z.string().min(1),
    CLERK_SECRET_KEY: z.string().min(1),
    MONGODB_URI: z.string().min(1),
    AWS_S3_ACCESS_KEY: z.string().min(1),
    AWS_S3_SECRET_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_STREAM_KEY: z.string().min(1),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_STREAM_KEY: process.env.NEXT_PUBLIC_STREAM_KEY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    MONGODB_URI: process.env.MONGODB_URI,
    AWS_S3_ACCESS_KEY: process.env.AWS_S3_ACCESS_KEY,
    AWS_S3_SECRET_KEY: process.env.AWS_S3_SECRET_KEY,
  } as RuntimeEnv,
});
