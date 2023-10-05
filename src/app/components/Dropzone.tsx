import { Pencil, Trash2 } from "lucide-react";
import { useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { useDropzone } from "react-dropzone";

interface DropzoneProps {
  clearSetImage: boolean;
  setDayImage: (image: File | null) => void;
}

export default function DropzoneComponent({
  clearSetImage,
  setDayImage,
}: DropzoneProps) {
  const [image, setImage] = useState<File | null>(null);

  const { theme } = useTheme();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setImage(acceptedFiles[0]);
      setDayImage(acceptedFiles[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  if (!clearSetImage) {
    setImage(null);
    setDayImage(null);
  }

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setImage(null);
    setDayImage(null);
  };

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
          <button type="button" onClick={handleDelete}>
            <Trash2 color={theme === "light" ? "#1f2937" : "white"} />
          </button>
        )}
      </div>
    </div>
  );
}
