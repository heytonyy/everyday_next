import AvatarImage from "./AvatarImage";
import { useState } from "react";
import { mdBreakpoint } from "@/utils/tailwind";
import useWindowSize from "@/hooks/useWindowSize";
import DropzoneComponent from "./Dropzone";
import CardDivider from "./CardDivider";
import { FileImage, Mic, MoreHorizontal, Paperclip, Video } from "lucide-react";

export default function MyDayForm() {
  const [day, setDay] = useState("");
  const [isImage, setIsImage] = useState(false);

  const windowSize = useWindowSize();
  const isNonMobileScreen = windowSize.width >= mdBreakpoint;

  const handleDay = () => {
    // TODO: Send day to server component
    console.log(day);

    setIsImage(false);
    setDay("");
  };

  return (
    <div className="rounded-xl bg-gray-200 px-4 py-6 shadow-md">
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
        <div className="mt-4 rounded border p-4">
          <DropzoneComponent clearSetImage={isImage} />
        </div>
      )}
      <CardDivider />
      <div className="flex items-center justify-between">
        <div
          className="flex items-center justify-between gap-1"
          onClick={() => setIsImage(!isImage)}
        >
          <FileImage color="black" />
          <span className="text-gray-700 hover:cursor-pointer hover:text-blue-500">
            Image
          </span>
        </div>
        {isNonMobileScreen ? (
          <>
            <div className="flex items-center justify-between gap-1">
              <Video color="black" />
              <span className="text-gray-700">Clip</span>
            </div>
            <div className="flex items-center justify-between gap-1">
              <Paperclip color="black" />
              <span className="text-gray-700">Attachment</span>
            </div>
            <div className="flex items-center justify-between gap-1">
              <Mic color="black" />
              <span className="text-gray-700">Audio</span>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-between gap-1">
            <MoreHorizontal color="black" />
          </div>
        )}

        {/* SUBMIT BUTTON */}
        <button
          disabled={!day}
          onClick={handleDay}
          className={`rounded-md bg-gray-300 px-4 py-2 text-gray-700 ${
            day && isImage
              ? "hover:cursor-pointer hover:bg-blue-500 hover:text-white"
              : "cursor-not-allowed"
          }`}
        >
          Post
        </button>
      </div>
    </div>
  );
}
