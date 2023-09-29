"use client";
import { useUser } from "@clerk/nextjs";
import AvatarImage from "./AvatarImage";
import CardDivider from "./CardDivider";
import { MapPin, BookOpen } from "lucide-react";
import FriendsList from "./FriendsList";
import { useTheme } from "next-themes";

export default function UserCard() {
  const { user } = useUser();

  const { theme } = useTheme();

  if (!user) {
    return null;
  }

  return (
    <div className="rounded-xl bg-gray-200 px-4 py-6 shadow-md dark:bg-gray-800">
      {/* FIRST ROW */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center justify-between gap-4">
          {/* AVATAR */}
          <AvatarImage />
          <div>
            <div className="flex items-center justify-between font-medium text-gray-900 hover:cursor-pointer hover:text-blue-500 dark:text-white">
              {user.firstName} {user.lastName}
            </div>
            <div
              aria-label="username"
              className="text-xs font-medium text-gray-700 dark:text-gray-400"
            >
              @{user.username}
            </div>
            {/* TODO: add friends number */}
            <div
              aria-label="friends count"
              className="mt-2 text-xs text-gray-900 dark:text-white"
            >
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
          <MapPin color={theme === "light" ? "#1f2937" : "white"} />
          <span className="text-gray-700 dark:text-gray-400">location</span>
        </div>
        {/* BIO */}
        <div className="mb-2 flex items-center gap-4">
          <BookOpen color={theme === "light" ? "#1f2937" : "white"} />
          <span className="text-gray-700 dark:text-gray-400">Bio</span>
        </div>
      </div>
      <CardDivider />
      {/* THIRD ROW */}
      <FriendsList />
    </div>
  );
}
