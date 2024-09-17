import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}
export default async function SingleSnippet(props: Props) {
  await new Promise((r) => setTimeout(r, 2000));
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className=" flex m-4 items-center justify-between">
        <h1 className=" text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-2">
          <button className="p-2 border rounded w-20">Edit</button>
          <button className="p-2 border rounded w-20">Delete</button>
        </div>
      </div>
      {/* display where whitespace matters. */}
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
