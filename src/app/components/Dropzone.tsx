import { useDropzone } from "react-dropzone";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

export default function DropzoneComponent() {
  const [image, setImage] = useState<File | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="rounded-md border-dashed p-4 hover:cursor-pointer"
    >
      <input {...getInputProps()} />
      <div className="flex items-center justify-between">
        <div
          {...getRootProps()}
          className="w-full border-2 border-dashed p-4 hover:cursor-pointer"
        >
          <input {...getInputProps()} />
          {!image ? (
            <p>Add picture here</p>
          ) : (
            <div className="flex items-center justify-between">
              <span>{image.name}</span>
              <Pencil />
            </div>
          )}
        </div>
        {image && (
          <button onClick={() => setImage(null)} className="w-1/6">
            <Trash2 />
          </button>
        )}
      </div>
    </div>
  );
}
