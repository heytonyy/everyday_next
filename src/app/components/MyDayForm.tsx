import { FileImage, Mic, MoreHorizontal, Paperclip, Video } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { useAppSelector } from "@/state/hooks";
import AvatarImage from "@/components/AvatarImage";
import { mdBreakpoint } from "@/utils/tailwind";
import useWindowSize from "@/hooks/useWindowSize";
import DropzoneComponent from "@/components/Dropzone";
import CardDivider from "@/components/CardDivider";
import Button from "@/components/Button";

interface FormElements extends HTMLFormControlsCollection {
  dayInput: HTMLInputElement;
}
interface DayFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function MyDayForm() {
  const { theme } = useTheme();
  const windowSize = useWindowSize();
  const isNonMobileScreen = windowSize.width >= mdBreakpoint;
  const clerkId = useAppSelector((state) => state.user?.clerkId);

  const [dayImage, setDayImage] = useState<File | null>(null);
  const [dayDescription, setDayDescription] = useState("");
  const [isImage, setIsImage] = useState(false);
  const [hovered, setHovered] = useState("");

  const handleSubmitDay = async (e: React.FormEvent<DayFormElement>) => {
    e.preventDefault();
    try {
      const { uploadURL } = await fetch("/api/days/image-url")
        .then((res) => res.json())
        .catch((error) => console.log(error));

      await fetch(uploadURL, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: dayImage,
      });

      const newDay = {
        userId: clerkId,
        description: dayDescription,
        imageUrl: uploadURL.split("?")[0],
      };

      console.log(newDay);

      await fetch("/api/days/post-day", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDay),
      });

      resetState();
    } catch (error) {
      console.log(error);
    }
  };

  const resetState = () => {
    setIsImage(false);
    setDayDescription("");
    setDayImage(null);
  };

  return (
    <div className="rounded-xl bg-gray-200 px-4 py-6 shadow-md dark:bg-gray-800">
      {/* PICTURE AND TEXT FORM */}
      <div className="flex items-center justify-between gap-6">
        <AvatarImage />
        <input
          id="day-field"
          placeholder="What did you do today?"
          onChange={(e) => setDayDescription(e.target.value)}
          value={dayDescription}
          className="w-full rounded-lg border-gray-300 p-2"
        />
      </div>
      {/* IMAGE DROPZONE FORM / TOGGLE */}
      {isImage && (
        <div className="mt-4 p-2">
          <DropzoneComponent
            clearSetImage={isImage}
            setDayImage={setDayImage}
          />
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
        <form onSubmit={handleSubmitDay}>
          <Button
            disabled={!dayDescription}
            type="submit"
            className={`rounded-md bg-gray-300 px-4 py-2 text-gray-700 dark:bg-gray-700 dark:text-white ${
              dayDescription && isImage
                ? "hover:cursor-pointer hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white"
                : "cursor-not-allowed"
            }`}
          >
            Post
          </Button>
        </form>
      </div>
    </div>
  );
}
