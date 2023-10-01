import { useTheme } from "next-themes";

export default function FriendsList() {
  const { theme } = useTheme();

  return <div className="pl-2 text-gray-900 dark:text-white">Friends List</div>;
}
