import { MongoClient, Db, ServerApiVersion } from "mongodb";
import { env } from "@/env";

const uri = env.MONGODB_URI;

let client: MongoClient;
let cachedDb: Db;

export async function connectToDatabase() {
  if (!uri) {
    throw new Error("MONGO_URI environment variable not set");
  }

  if (cachedDb) {
    return cachedDb;
  }

  try {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    const connection = await client.connect();

    // Get reference to default database
    const db = connection.db("everday-next");

    console.log("Connected to MongoDB cluster! Caching connection...");
    cachedDb = db;
    return db;
  } catch (error) {
    console.log("Error connecting to MongoDB cluster!", error);
    throw error;
  }
}

export async function getDb() {
  if (!client) {
    await connectToDatabase();
  }

  return cachedDb;
}
