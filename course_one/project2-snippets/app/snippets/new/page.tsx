import { createSnippet } from "@/actions";
import { db } from "@/db";
import { redirect } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";

export default function SnippetCreatePage() {
  useFormState(createSnippet);
  return (
    <form action={createSnippet}>
      <h3 className=" font-bold m-3">Create a Snippet!</h3>
      <div className="flex flex-col gap-4 m-3">
        <div className="flex gap-4">
          <label className=" w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label className=" w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
        {/* button */}
        <button type="submit" className="rounded p-3 bg-blue-500 text-white">
          Create
        </button>
      </div>
    </form>
  );
}
