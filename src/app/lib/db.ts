import mongoose from "mongoose";
import { env } from "@/env";

mongoose.Promise = global.Promise;

let cachedClient: mongoose.Mongoose | null = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const connection = await mongoose.connect(env.MONGODB_URI, {
    retryWrites: true,
    w: "majority",
  });

  cachedClient = connection;
  return cachedClient;
}

export { connectToDatabase };
