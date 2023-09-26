import { useDropzone } from "react-dropzone";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { useCallback } from "react";

interface DropzoneProps {
  clearSetImage: boolean;
}

export default function DropzoneComponent({ clearSetImage }: DropzoneProps) {
  const [image, setImage] = useState<File | null>(null);

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
      className="rounded-md border border-dashed border-black p-4 hover:cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <input {...getInputProps()} />
        {!image ? (
          <p>Click or Drop picture here</p>
        ) : (
          <div className="flex items-center justify-between text-gray-700">
            <span>{image.name}</span>
            <Pencil color="black" />
          </div>
        )}
        {image && (
          <button onClick={() => setImage(null)} className="w-1/6">
            <Trash2 color="black" />
          </button>
        )}
      </div>
    </div>
  );
}
