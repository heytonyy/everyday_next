import { useState } from "react";
import Image from "next/image";
import FriendHeader from "./FriendHeader";
import { useEffect } from "react";
import { ThumbsDown, ThumbsUp, MessageSquare } from "lucide-react";
import CardDivider from "./CardDivider";

export default function Day() {
  // TODO: use like from redux when implemented
  const [isLiked, setIsLiked] = useState(false);
  const [isComments, setIsComments] = useState(false);

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
    <div className="rounded-xl bg-gray-200 px-4 py-6 shadow-md">
      {/* FRIEND HEADER */}
      <FriendHeader />
      {/* DAY SECTION */}
      <span className="mt-4 text-gray-700">Day Description</span>
      {/* DAY IMAGE */}
      <div id="image-container" className="mt-3 rounded-xl">
        {width && (
          <Image
            width={width}
            height={height}
            alt="day"
            src="/sol_example.png"
          />
        )}
      </div>
      {/* DAY LIKES AND COMMENTS */}
      <div className="mt-1 flex items-center justify-between">
        <div className="flex items-center justify-between gap-4">
          {/* LIKES */}
          <div className="flex items-center justify-between gap-1">
            <button onClick={() => patchLike()}>
              {isLiked ? (
                <ThumbsDown color="black" />
              ) : (
                <ThumbsUp color="black" />
              )}
            </button>
            <span>0 likes</span>
          </div>
          {/* COMMENTS */}
          <div className="flex items-center justify-between gap-1">
            <button onClick={() => setIsComments(!isComments)}>
              <MessageSquare color="black" />
            </button>
            <span>0 comments</span>
          </div>
        </div>
      </div>
      {isComments && (
        <div className="mt-2">
          {/* TODO: Map comments from redux */}
          <div key={1}>
            <CardDivider />
            <span className="my-2 pl-4">comment</span>
          </div>
          <CardDivider />
        </div>
      )}
    </div>
  );
}
