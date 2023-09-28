type StoreState = {
  mode: string;
  // user: User | null;
  // token: string | null;
  // days: Day[];
  // chat: Chat | null;
};

type User = {
  _id?: string;
  // location: string;
  bio: string;
  friends: User[];
  createdAt?: string;
  updatedAt?: string;
};

type Day = {
  _id: string;
  userId: string;
  username: string;
  location: string;
  description: string;
  picturePath: string;
  // userPicturePath: string;
  likes: Map<string, boolean>;
  comments: string[];
};

export type { StoreState, User, Day };
