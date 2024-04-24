"use client"; // this registers <Editor> as a Client Component
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";
import { useTheme } from "next-themes";
 
// Our <Editor> component we can reuse later
export default function Editor() {
    const {resolvedTheme} = useTheme();
  // Creates a new editor instance.
  const editor = useCreateBlockNote();
 
  // Renders the editor instance using a React component.
  return <BlockNoteView 
    editor={editor} 
    theme={resolvedTheme === "dark" ? "dark" : "light"}
  />;
}