"use client";
import FriendsList from "./FriendsList";
import UserHeader from "./UserHeader";
import UserBio from "./UserBio";

export default function UserCard() {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-gray-200 px-4 py-6 shadow-md dark:bg-gray-800">
      <UserHeader />
      <UserBio />
      <FriendsList />
    </div>
  );
}
