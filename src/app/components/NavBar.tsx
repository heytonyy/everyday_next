"use client";

import { mdBreakpoint } from "@/utils/tailwind";
import useWindowSize from "@/hooks/useWindowSize";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";
import MessageIcon from "./MessageIcon";

export default function NavBar() {
  const router = useRouter();

  const windowSize = useWindowSize();
  const isNonMobileScreen = windowSize.width >= mdBreakpoint;

  const navigateToDayFeed = () => {
    router.push("/dayfeed");
  };

  return (
    <div className="flex items-center justify-between bg-gray-800 p-4">
      <div className="flex items-center justify-between gap-7">
        {/* Logo/Brand */}
        <div
          className="text-2xl font-bold text-white hover:cursor-pointer hover:text-blue-500"
          onClick={() => navigateToDayFeed()}
        >
          Everyday
        </div>

        {/* Search bar only on nonMobileScreens */}
        {isNonMobileScreen && (
          <div className="flex items-center justify-between gap-12 rounded-lg px-5 py-1">
            <input className="rounded-md bg-gray-700 p-2 text-white" />
          </div>
        )}
      </div>
      {/* DESKTOP MENU */}
      <div className="flex items-center justify-between gap-8">
        {/* CHAT ICON */}
        <MessageIcon />
        {/* DARK/LIGHT MODE */}
        <ThemeToggler />
        {/* DROPDOWN MENU */}
        <UserButton afterSignOutUrl="/" />
      </div>
      {/* MOBILE MENU */}
    </div>
  );
}
