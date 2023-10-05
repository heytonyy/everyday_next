import { ObjectId } from "mongodb";

type StoreState = {
  mode: string;
  user: User | null;
};

interface User {
  _id?: ObjectId;
  clerkId: string;
  bio: string;
  friends: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface Day {
  _id?: ObjectId;
  userId: string;
  description: string;
  imageUrl: string;
  likes?: Map<string, boolean>;
  comments?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export type { StoreState, Day, User };
