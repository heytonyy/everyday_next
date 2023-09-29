import AvatarImage from "./AvatarImage";
import { UserPlus, UserMinus } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function FriendHeader() {
  // TODO: use friend from redux when implemented
  const [isFriend, setIsFriend] = useState(false);

  const { theme } = useTheme();

  const navigateToUserProfile = () => {
    console.log("Go to user profile");
  };

  const handlePatchFriend = () => {
    console.log("Patch friend");
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-between gap-4 pl-2">
        <AvatarImage />
        <div onClick={() => navigateToUserProfile()}>
          <span className="flex items-center justify-between text-gray-900 hover:cursor-pointer hover:text-blue-500 dark:text-white">
            Friend Name
          </span>
          <span className="flex items-center justify-between text-xs text-gray-700 dark:text-gray-400">
            Location
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        {/* ADD/REMOVE FRIEND */}
        <button
          onClick={() => handlePatchFriend()}
          className="flex items-center justify-between gap-2 rounded-full bg-gray-300 p-2 hover:bg-blue-500 dark:bg-gray-700 dark:hover:bg-blue-500"
        >
          {isFriend ? (
            <UserMinus color={theme === "light" ? "#1f2937" : "white"} />
          ) : (
            <UserPlus color={theme === "light" ? "#1f2937" : "white"} />
          )}
        </button>
      </div>
    </div>
  );
}
