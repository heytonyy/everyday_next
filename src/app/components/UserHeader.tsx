import { useAppSelector } from "@/state/hooks";
import AvatarImage from "@/components/AvatarImage";
import { useUser } from "@clerk/nextjs";

export default function UserHeader() {
  const friends = useAppSelector((state) => state.user?.friends);
  const { user: clerkUser } = useUser();

  if (!clerkUser) {
    return null;
  }

  const navigateToUserProfile = () => {
    console.log("Go to user profile");
  };

  return (
    <div className="mb-4 flex items-center justify-between gap-2">
      <div className="flex items-center justify-start gap-4">
        <AvatarImage />
        <div>
          <div
            onClick={() => navigateToUserProfile()}
            className="font-medium text-gray-900 hover:cursor-pointer hover:text-blue-500 dark:text-white dark:hover:text-blue-500"
          >
            {clerkUser.firstName} {clerkUser.lastName}
          </div>
          <div
            aria-label="username"
            className="text-xs font-medium text-gray-700 dark:text-gray-400"
          >
            @{clerkUser.username}
          </div>
          <div
            aria-label="friends count"
            className="mt-2 text-xs text-gray-900 dark:text-white"
          >
            {friends && friends.length} friends
          </div>
        </div>
      </div>
    </div>
  );
}
