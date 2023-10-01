import { useState } from "react";
import Image from "next/image";
import FriendHeader from "./FriendHeader";
import { useEffect } from "react";
import { ThumbsDown, ThumbsUp, MessageSquare } from "lucide-react";
import CardDivider from "./CardDivider";
import { useTheme } from "next-themes";

export default function Day() {
  // TODO: use like from redux when implemented
  const [isLiked, setIsLiked] = useState(false);
  const [isComments, setIsComments] = useState(false);

  const { theme } = useTheme();

  const [width, setWidth] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.getElementById("image-container")?.clientWidth);
      setHeight(document.getElementById("image-container")?.clientHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const patchLike = () => {
    // TODO: handle like patch
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex flex-col gap-x-4  gap-y-2 rounded-xl bg-gray-200 px-4 py-6 shadow-md dark:bg-gray-800">
      {/* FRIEND HEADER */}
      <FriendHeader />
      {/* DAY SECTION */}
      <div className="text-gray-900 dark:text-white">Day Description</div>
      {/* DAY IMAGE */}
      <div id="image-container">
        {width && (
          <Image
            priority
            width={width}
            height={height}
            alt="day"
            src="/sol_example.png"
          />
        )}
      </div>
      {/* DAY LIKES AND COMMENTS */}
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-4">
          {/* LIKES */}
          <div className="flex items-center justify-between gap-2">
            <button onClick={() => patchLike()}>
              {isLiked ? (
                <ThumbsDown color={theme === "light" ? "#1f2937" : "white"} />
              ) : (
                <ThumbsUp color={theme === "light" ? "#1f2937" : "white"} />
              )}
            </button>
            <span>0 likes</span>
          </div>
          {/* COMMENTS */}
          <div className="flex items-center justify-between gap-2">
            <button onClick={() => setIsComments(!isComments)}>
              <MessageSquare color={theme === "light" ? "#1f2937" : "white"} />
            </button>
            <span>0 comments</span>
          </div>
        </div>
      </div>
      {isComments && (
        <div className="mt-2 flex flex-col">
          <CardDivider />
          {/* TODO: Map comments from day */}
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <div key={item} className="flex flex-col">
                <span className="py-4 pl-4 text-gray-700 dark:text-gray-400">
                  comment
                </span>
                <CardDivider />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
