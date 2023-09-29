import { useDropzone } from "react-dropzone";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { useCallback } from "react";
import { useTheme } from "next-themes";

interface DropzoneProps {
  clearSetImage: boolean;
}

export default function DropzoneComponent({ clearSetImage }: DropzoneProps) {
  const [image, setImage] = useState<File | null>(null);

  const { theme } = useTheme();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImage(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  if (!clearSetImage) {
    setImage(null);
  }

  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      className="rounded-md border border-dashed border-black p-4 hover:cursor-pointer dark:border-white"
    >
      <div className="g-4 flex items-center justify-between">
        <input {...getInputProps()} />
        {!image ? (
          <p className="text-gray-700 dark:text-gray-400">
            Click or Drop picture here
          </p>
        ) : (
          <div className="flex items-center justify-between text-gray-700 dark:text-gray-400">
            <span className="pr-4">{image.name}</span>
            <Pencil color={theme === "light" ? "#1f2937" : "white"} />
          </div>
        )}
        {image && (
          <button onClick={() => setImage(null)}>
            <Trash2 color={theme === "light" ? "#1f2937" : "white"} />
          </button>
        )}
      </div>
    </div>
  );
}
