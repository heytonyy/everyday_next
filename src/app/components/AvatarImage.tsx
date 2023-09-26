"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function AvatarImage() {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <div className="flex h-16 w-16 items-center">
      <Image
        priority
        className={`rounded-full object-cover`}
        width={64}
        height={64}
        src={user.imageUrl}
        alt="user profile"
      />
    </div>
  );
}
