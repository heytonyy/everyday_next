import AvatarImage from "./AvatarImage";
import { UserPlus, UserMinus } from "lucide-react";
import { useState } from "react";

export default function FriendHeader() {
  // TODO: use friend from redux when implemented
  const [isFriend, setIsFriend] = useState(false);

  const navigateToUserProfile = () => {
    console.log("Go to user profile");
  };

  const handlePatchFriend = () => {
    console.log("Patch friend");
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-between gap-4">
        <AvatarImage size={50} />
        <div onClick={() => navigateToUserProfile()}>
          <span className="flex items-center justify-between font-medium text-gray-700 hover:cursor-pointer hover:text-blue-500">
            Friend Name
          </span>
          <span className="flex items-center justify-between text-xs text-gray-700 hover:cursor-pointer hover:text-blue-500">
            Location
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        {/* ADD/REMOVE FRIEND */}
        <button
          onClick={() => handlePatchFriend()}
          className="flex items-center justify-between gap-2 rounded-full bg-gray-300 p-2 hover:bg-gray-400"
        >
          {isFriend ? <UserMinus color="black" /> : <UserPlus color="black" />}
        </button>
      </div>
    </div>
  );
}
