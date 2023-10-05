"use client";

import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useAppDispatch } from "@/state/hooks";
import { setMode } from "@/state/reducers";

export function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { theme, setTheme } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    dispatch(setMode(newTheme));
    handleClick();
  };

  const handleClick = () => {
    setIsHovered(false);
  };

  return (
    <button onClick={() => toggleTheme()}>
      {theme === "light" ? (
        <Moon
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          color={`${isHovered && !isClicked ? "#424242" : "white"}`}
        />
      ) : (
        <Sun
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          color={`${isHovered && !isClicked ? "dodgerblue" : "white"}`}
        />
      )}
    </button>
  );
}
