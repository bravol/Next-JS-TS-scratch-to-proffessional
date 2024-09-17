"use client";

import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import { useState } from "react";
import * as actions from "@/actions";

interface Props {
  snippet: Snippet;
}
export default function EditForm({ snippet }: Props) {
  const [code, setCode] = useState(snippet.code);
  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };
  const editSnippetAction = actions.updateSnippet.bind(null, snippet.id, code);
  return (
    <div className=" my-10 flex flex-col gap-4">
      <Editor
        height={"40vh"}
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
    </div>
  );
}
