import { db } from "@/db";
import { users } from "@/db/schema";
import { eq, ne } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await db.select().from(users).where(ne(users.id, 1));
  return NextResponse.json(res);
}
