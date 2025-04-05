"use server";

import { prisma } from "@/lib/prisma";
import { getDatabaseUserId } from "./userAction";
import { revalidatePath } from "next/cache";

export async function createPost(content: string, image: string) {
  try {
    const userId = await getDatabaseUserId();
    const post = await prisma.post.create({
      data: {
        content,
        image,
        authorId: userId,
      },
    });

    revalidatePath("/"); //purge the cache for the home page
    return { success: true, post };
  } catch (error) {
    console.error("Failed to create Post:", error);
    return { success: false, error: "Failed to create post" };
  }
}
