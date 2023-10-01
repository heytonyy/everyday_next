"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function AvatarImage() {
  const { user } = useUser();
  const size = 64; // 64px 4rem

  if (!user) {
    return null;
  }

  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-full`}
    >
      <Image
        priority
        className={`rounded-full object-cover`}
        width={size}
        height={size}
        src={user.imageUrl}
        alt="user profile"
      />
    </div>
  );
}
