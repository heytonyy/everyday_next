import AvatarImage from "./AvatarImage";
import { useState } from "react";
import { mdBreakpoint } from "@/utils/tailwind";
import useWindowSize from "@/hooks/useWindowSize";
import DropzoneComponent from "./Dropzone";
import CardDivider from "./CardDivider";
import { FileImage, Mic, MoreHorizontal, Paperclip, Video } from "lucide-react";
import { useTheme } from "next-themes";

export default function MyDayForm() {
  const [day, setDay] = useState("");
  const [isImage, setIsImage] = useState(false);
  const [hovered, setHovered] = useState("");

  const { theme } = useTheme();

  const windowSize = useWindowSize();
  const isNonMobileScreen = windowSize.width >= mdBreakpoint;

  const handleDay = () => {
    // TODO: Send day to server component
    console.log(day);
    setIsImage(false);
    setDay("");
  };

  return (
    <div className="rounded-xl bg-gray-200 px-4 py-6 shadow-md dark:bg-gray-800">
      {/* PICTURE AND TEXT FORM */}
      <div className="flex items-center justify-between gap-6">
        <AvatarImage />
        <input
          id="day-field"
          placeholder="What did you do today?"
          onChange={(e) => setDay(e.target.value)}
          value={day}
          className="w-full rounded-lg border-gray-300 p-2"
        />
      </div>
      {/* IMAGE DROPZONE FORM / TOGGLE */}
      {isImage && (
        <div className="mt-4 p-2">
          <DropzoneComponent clearSetImage={isImage} />
        </div>
      )}
      <div className="my-4">
        <CardDivider />
      </div>
      {/* DAY MENU */}
      <div className="flex items-center justify-between">
        <button
          className="flex items-center justify-between gap-1 hover:cursor-pointer"
          onClick={() => setIsImage(!isImage)}
          onMouseEnter={() => setHovered("image")}
          onMouseLeave={() => setHovered("")}
        >
          {hovered === "image" ? (
            <>
              <FileImage color="#1e90ff" />
              <span className="text-blue-500 dark:text-blue-500">Image</span>
            </>
          ) : (
            <>
              <FileImage color={theme === "light" ? "#1f2937" : "white"} />
              <span className="text-gray-900 dark:text-gray-400">Image</span>
            </>
          )}
        </button>
        {isNonMobileScreen ? (
          <>
            <button
              disabled
              className="flex cursor-not-allowed items-center justify-between gap-1"
              onMouseEnter={() => setHovered("video")}
              onMouseLeave={() => setHovered("")}
            >
              {hovered === "video" ? (
                <>
                  <Video color="#1e90ff" />
                  <span className="text-blue-500 dark:text-blue-500">
                    Video
                  </span>
                </>
              ) : (
                <>
                  <Video color={theme === "light" ? "#1f2937" : "white"} />
                  <span className="text-gray-900 dark:text-gray-400">
                    Video
                  </span>
                </>
              )}
            </button>
            <button
              disabled
              className="flex cursor-not-allowed items-center justify-between gap-1"
              onMouseEnter={() => setHovered("attachment")}
              onMouseLeave={() => setHovered("")}
            >
              {hovered === "attachment" ? (
                <>
                  <Paperclip color="#1e90ff" />
                  <span className="text-blue-500 dark:text-blue-500">
                    Attachment
                  </span>
                </>
              ) : (
                <>
                  <Paperclip color={theme === "light" ? "#1f2937" : "white"} />
                  <span className="text-gray-900 dark:text-gray-400">
                    Attachment
                  </span>
                </>
              )}
            </button>
            <button
              disabled
              className="flex cursor-not-allowed items-center justify-between gap-1"
              onMouseEnter={() => setHovered("audio")}
              onMouseLeave={() => setHovered("")}
            >
              {hovered === "audio" ? (
                <>
                  <Mic color="#1e90ff" />
                  <span className="text-blue-500 dark:text-blue-500">
                    Audio
                  </span>
                </>
              ) : (
                <>
                  <Mic color={theme === "light" ? "#1f2937" : "white"} />
                  <span className="text-gray-900 dark:text-gray-400">
                    Audio
                  </span>
                </>
              )}
            </button>
          </>
        ) : (
          <button
            disabled
            className="flex cursor-not-allowed items-center justify-between gap-1"
          >
            {hovered === "more" ? (
              <MoreHorizontal color="#1e90ff" />
            ) : (
              <MoreHorizontal color={theme === "light" ? "#1f2937" : "white"} />
            )}
          </button>
        )}

        {/* SUBMIT BUTTON */}
        <button
          disabled={!day}
          onClick={handleDay}
          className={`rounded-md bg-gray-300 px-4 py-2 text-gray-700 dark:bg-gray-700 dark:text-white ${
            day && isImage
              ? "hover:cursor-pointer hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white"
              : "cursor-not-allowed"
          }`}
        >
          Post
        </button>
      </div>
    </div>
  );
}
