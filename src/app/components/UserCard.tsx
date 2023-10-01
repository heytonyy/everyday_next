"use client";
import { UserProps } from "../state/types";
import { useUser } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { BookOpen } from "lucide-react";
import AvatarImage from "./AvatarImage";
import CardDivider from "./CardDivider";
import FriendsList from "./FriendsList";

export default function UserCard({ user }: UserProps) {
  const { bio, friends } = user;
  const { theme } = useTheme();
  const { user: clerkUser } = useUser();

  if (!clerkUser) {
    return null;
  }

  return (
    <div className="rounded-xl bg-gray-200 px-4 py-6 shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center justify-between gap-4">
          <AvatarImage />
          <div>
            <div className="flex items-center justify-between font-medium text-gray-900 hover:cursor-pointer hover:text-blue-500 dark:text-white">
              {clerkUser.firstName} {clerkUser.lastName}
            </div>
            <div
              aria-label="username"
              className="text-xs font-medium text-gray-700 dark:text-gray-400"
            >
              @{clerkUser.username}
            </div>
            <div
              aria-label="friends count"
              className="mt-2 text-xs text-gray-900 dark:text-white"
            >
              {friends.length} friends
            </div>
          </div>
        </div>
      </div>
      <CardDivider />
      <div>
        <div className="mb-2 flex items-center gap-4">
          <BookOpen color={theme === "light" ? "#1f2937" : "white"} />
          <span className="text-gray-700 dark:text-gray-400">{bio}</span>
        </div>
      </div>
      <CardDivider />
      <FriendsList />
    </div>
  );
}
