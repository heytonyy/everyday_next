import { NextResponse } from "next/server";
import { generateUploadURL } from "@/app/config/aws";

// GET /api/days/image-url
export async function GET() {
  try {
    // generate upload url
    const uploadURL = await generateUploadURL();

    console.log(uploadURL);

    return NextResponse.json({ uploadURL }, { status: 200 });
  } catch (error) {
    // error handling
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
