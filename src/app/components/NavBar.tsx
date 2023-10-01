"use client";

import { mdBreakpoint } from "@/utils/tailwind";
import useWindowSize from "@/hooks/useWindowSize";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";
import MessageIcon from "./MessageIcon";

export default function NavBar() {
  const windowSize = useWindowSize();
  const isNonMobileScreen = windowSize.width >= mdBreakpoint;

  const router = useRouter();

  const navigateToDayFeed = () => {
    router.push("/dayfeed");
  };

  return (
    <div className="flex items-center justify-between bg-blue-500 p-4 dark:bg-gray-800">
      <div className="flex items-center justify-between gap-7">
        <div
          className="text-2xl font-bold text-white hover:cursor-pointer hover:text-gray-800 dark:text-blue-500 dark:hover:text-white"
          onClick={() => navigateToDayFeed()}
        >
          Everyday
        </div>

        {/* Search bar only on nonMobileScreens */}
        {isNonMobileScreen && (
          <div className="flex items-center justify-between gap-12 rounded-lg px-5 py-1">
            <input className="rounded-md p-2 text-white" />
          </div>
        )}
      </div>
      {/* DESKTOP MENU */}
      <div className="flex items-center justify-between gap-8">
        <MessageIcon />
        <ThemeToggler />
        <UserButton afterSignOutUrl="/" />
      </div>
      {/* MOBILE MENU */}
    </div>
  );
}
