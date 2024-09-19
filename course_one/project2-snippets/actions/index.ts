"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function updateSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({ where: { id } });
  revalidatePath("/");
  redirect("/");
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    const title = formData.get("title");
    const code = formData.get("code");
    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "Title should be at least 3 characters long",
      };
    }
    if (typeof code !== "string" || code.length < 10) {
      return {
        message: "Code should be a string",
      };
    }
    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    // throw new Error("Failed to save!");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: "Ooops Some thing went wrong!!",
      };
    }
  }
  //rerender the page because data is changed
  revalidatePath("/");
  //redirect the user to home page
  redirect("/");
}
