import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { getDb } from "@/app/config/db";
import { User } from "@/state/types";

// GET /api/users/get-user
export async function GET() {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return NextResponse.json(
      { error: "User not authenticated" },
      { status: 401 }
    );
  }

  try {
    // connect to database
    const db = await getDb();

    let user = await db.collection("users").findOne({ clerkId: clerkUser.id });

    if (!user) {
      // create new user in database
      const newUser: User = {
        clerkId: clerkUser.id,
        bio: "Hello World!",
        friends: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const result = db.collection("users").insertOne(newUser);
      return NextResponse.json({ result }, { status: 200 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    // error handling
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
