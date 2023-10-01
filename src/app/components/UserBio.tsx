import { BookOpen } from "lucide-react";
import CardDivider from "./CardDivider";
import { useTheme } from "next-themes";
import { useAppSelector } from "../state/hooks";

export default function UserBio() {
  const { theme } = useTheme();
  const bio = useAppSelector((state) => state.user?.bio);

  return (
    <div>
      <CardDivider />
      <div className="flex items-center gap-4 py-4 pl-2">
        <BookOpen color={theme === "light" ? "#1f2937" : "white"} />
        <span className="text-gray-700 dark:text-gray-400">{bio}</span>
      </div>
      <CardDivider />
    </div>
  );
}
