"use client";

import * as actions from "@/actions";
import React from "react";
import { useFormState } from "react-dom";

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });
  return (
    <form action={action}>
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
        {formState.message ? (
          <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
            {formState.message}
          </div>
        ) : null}
        {/* button */}
        <button type="submit" className="rounded p-3 bg-blue-500 text-white">
          Create
        </button>
      </div>
    </form>
  );
}
