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

interface UserProps {
  user: User;
}

type Day = {
  _id: string;
  userId: string;
  username: string;
  location: string;
  description: string;
  picturePath: string;
  likes: Map<string, boolean>;
  comments: string[];
};

export type { StoreState, Day, User, UserProps };
