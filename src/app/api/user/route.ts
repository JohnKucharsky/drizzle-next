import { db } from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
  // const res = await db.select().from(users).where(ne(users.id, 1));
  // const res = await db.query.users.findMany({
  //   where: eq(users.id, 2),
  //   with: {
  //     profile: true,
  //     posts: true,
  //   },
  // });
  const res = await db.query.posts.findFirst({
    with: {
      author: true,
      category: {
        columns: {
          postId: false,
          categoryId: false,
        },
        with: {
          category: {
            columns: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  const res2 = await db.query.categories.findFirst({
    with: {
      posts: true,
    },
  });
  return NextResponse.json({ res, res2 });
}
