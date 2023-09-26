"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

interface AvatarImageProps {
  size?: number;
}

export default function AvatarImage({ size = 64 }: AvatarImageProps) {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <div className="flex h-16 w-16 items-center justify-center">
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
