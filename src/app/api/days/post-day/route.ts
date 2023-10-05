import { NextResponse, NextRequest } from "next/server";
import { getDb } from "@/app/config/db";
import { Day } from "@/app/state/types";

// POST /api/days/post-day
export async function POST(req: NextRequest) {
  try {
    const { userId, description, imageUrl } = await req.json();

    const newDay: Day = {
      userId,
      description,
      imageUrl,
      likes: new Map<string, boolean>(),
      comments: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // connect to database
    const db = await getDb();
    const result = await db.collection("days").insertOne(newDay);

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    // error handling
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
