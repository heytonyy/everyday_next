"use client";

import NavBar from "../components/NavBar";
import { LoadingIndicator } from "stream-chat-react";
import { useUser } from "@clerk/nextjs";
import { mdBreakpoint } from "@/utils/tailwind";
import useWindowSize from "@/hooks/useWindowSize";
import UserCard from "../components/UserCard";
import MyDayForm from "../components/MyDayForm";
import AllDaysFeed from "../components/AllDaysFeed";

export default function DayFeed() {
  const { user } = useUser();

  const windowSize = useWindowSize();
  const isNonMobileScreen = windowSize.width >= mdBreakpoint;

  // If the user is not ready, show a loading indicator
  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingIndicator size={40} />
      </div>
    );
  }

  return (
    <>
      <NavBar />
      {/* MAIN CONTENT */}
      <div
        className={`w-full justify-between gap-2 px-[6%] py-8 ${
          isNonMobileScreen ? "flex" : "block"
        }`}
      >
        {/* LEFT (User profile & friends) */}
        <div className={isNonMobileScreen ? "basis-1/3" : undefined}>
          {/* USER CARD */}
          <UserCard />
        </div>
        {/* RIGHT/CENTER (Days Feed) */}
        <div
          className={`${isNonMobileScreen ? "basis-3/5" : undefined} ${
            isNonMobileScreen ? undefined : "mt-8"
          }`}
        >
          {/* DAYS FEED */}
          <MyDayForm />
          <AllDaysFeed />
        </div>
      </div>
    </>
  );
}
