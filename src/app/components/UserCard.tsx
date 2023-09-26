"use client";
import { useUser } from "@clerk/nextjs";
import AvatarImage from "./AvatarImage";
import CardDivider from "./CardDivider";
import { MapPin, BookOpen } from "lucide-react";
import FriendsList from "./FriendsList";

export default function UserCard() {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <div className="rounded-xl bg-gray-200 px-4 py-6 shadow-md">
      {/* FIRST ROW */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center justify-between gap-4">
          {/* AVATAR */}
          <AvatarImage />
          <div>
            <div className="flex items-center justify-between font-medium text-gray-700 hover:cursor-pointer hover:text-blue-500">
              {user.firstName} {user.lastName}
            </div>
            <div
              aria-label="username"
              className="text-xs font-medium text-gray-700"
            >
              @{user.username}
            </div>
            {/* TODO: add friends number */}
            <div aria-label="friends count" className="mt-2 text-xs font-light">
              0 friends
            </div>
          </div>
        </div>
      </div>
      <CardDivider />
      {/* SECOND ROW */}
      <div>
        {/* LOCATION */}
        <div className="mb-2 flex items-center gap-4">
          <MapPin color="black" />
          <span className="text-gray-700">location</span>
        </div>
        {/* BIO */}
        <div className="mb-2 flex items-center gap-4">
          <BookOpen color="black" />
          <span className="text-gray-700">Bio</span>
        </div>
      </div>
      <CardDivider />
      {/* THIRD ROW */}
      <FriendsList />
    </div>
  );
}
