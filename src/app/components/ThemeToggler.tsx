"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setMode } from "../redux/reducers";

export function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.mode);

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
  };

  return (
    <button onClick={() => toggleTheme()}>
      {theme === "light" ? <Moon color="white" /> : <Sun />}
    </button>
  );
}
