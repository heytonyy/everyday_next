"use client";

import { useEffect } from "react";
import { LoadingIndicator } from "stream-chat-react";
import { mdBreakpoint } from "@/utils/tailwind";
import { setUser } from "@/state/reducers";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import useWindowSize from "@/hooks/useWindowSize";
import NavBar from "@/components/NavBar";
import UserCard from "@/components/UserCard";
import MyDayForm from "@/components/MyDayForm";
import AllDaysFeed from "@/components/AllDaysFeed";

export default function DayFeed() {
  const windowSize = useWindowSize();
  const isNonMobileScreen = windowSize.width >= mdBreakpoint;

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("/api/users/get-user");
      const data = await response.json();
      dispatch(setUser(data.user));
    };

    getUser();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <UserCard />
        </div>
        {/* RIGHT/CENTER (Days Feed) */}
        <div
          className={`${isNonMobileScreen ? "basis-3/5" : undefined} ${
            isNonMobileScreen ? undefined : "mt-8"
          }`}
        >
          <MyDayForm />
          <AllDaysFeed />
        </div>
      </div>
    </>
  );
}
