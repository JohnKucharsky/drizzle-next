import Image from "next/image";
import { db } from "@/db";
import { users } from "@/db/schema";

export default async function Home() {
  const res = await db.select().from(users);
  return <main>{JSON.stringify(res)}</main>;
}
