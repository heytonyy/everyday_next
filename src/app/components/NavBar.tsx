"use client";

import { mdBreakpoint } from "@/utils/tailwind";
import useWindowSize from "@/hooks/useWindowSize";
import { MessageCircle, Moon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setMode } from "../redux/reducers";
import { ThemeToggler } from "./ThemeToggler";

export default function NavBar() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.mode);

  const windowSize = useWindowSize();
  const isNonMobileScreen = windowSize.width >= mdBreakpoint;

  const navigateToDayFeed = () => {
    router.push("/dayfeed");
  };

  const navigateToChat = () => {
    router.push("/chat");
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
        <button onClick={() => navigateToChat()}>
          <MessageCircle color="white" />
        </button>
        {/* DARK/LIGHT MODE */}
        <ThemeToggler />
        {/* DROPDOWN MENU */}
        <UserButton afterSignOutUrl="/" />
      </div>
      {/* MOBILE MENU */}
    </div>
  );
}
