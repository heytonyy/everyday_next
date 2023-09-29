"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useAppDispatch } from "../redux/hooks";
import { setMode } from "../redux/reducers";

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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsHovered(false);
  };

  return (
    <button onClick={() => toggleTheme()}>
      {theme === "light" ? (
        <Moon
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
          color={`${isHovered && !isClicked ? "dodgerblue" : "white"}`}
        />
      ) : (
        <Sun
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
          color={`${isHovered && !isClicked ? "dodgerblue" : "white"}`}
        />
      )}
    </button>
  );
}
