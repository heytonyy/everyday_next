import AvatarImage from "../components/AvatarImage";
import { useState } from "react";
import { mdBreakpoint } from "@/utils/tailwind";
import useWindowSize from "@/hooks/useWindowSize";
import DropzoneComponent from "../components/Dropzone";
import CardDivider from "../components/CardDivider";
import { FileImage, Mic, MoreHorizontal, Paperclip, Video } from "lucide-react";

export default function MyDayForm() {
  const [day, setDay] = useState("");
  const [isImage, setIsImage] = useState(false);

  const windowSize = useWindowSize();
  const isNonMobileScreen = windowSize.width >= mdBreakpoint;

  return (
    <div className="rounded-xl bg-gray-200 px-4 py-6 shadow-md">
      {/* PICTURE AND TEXT FORM */}
      <div className="gap-6">
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
          <DropzoneComponent />
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
      </div>
    </div>
  );
}
