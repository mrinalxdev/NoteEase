import { Content, useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import styles from "./App.module.css";
import { useState } from "react";
import { v4 as uuid } from "uuid"

type Note = {
  id: string;
  title: string;
  content: Content;
  updatedAt: Date;
};

function App() {
  const [notes, setNotes] = useState<Record<string, Note>>({});
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World</p>",
    editorProps: {
      attributes: {
        class: styles.textEditor,
      },
    },
  });

  const toggleBold = () => {
    editor?.chain().focus().toggleBold().run();
  };
  const toggleItalic = () => {
    editor?.chain().focus().toggleItalic().run();
  };
  const handleCreateNewNote = () => {};

  return (
    <div className={styles.pageContainer}>
      <div className={styles.sidebar}>
        <button className={styles.sidebarButton} onClick={handleCreateNewNote}>
          New Note
        </button>
      </div>
      <div className={styles.editorContainer}>
        <div className={styles.toolbar}>
          <button
            className={
              editor?.isActive("bold")
                ? styles.toolbarButtonActive
                : styles.toolbarButton
            }
            onClick={toggleBold}
          >
            Bold
          </button>
          <button
            className={
              editor?.isActive("italic")
                ? styles.toolbarButtonActive
                : styles.toolbarButton
            }
            onClick={toggleItalic}
          >
            Italic
          </button>
        </div>
        <EditorContent editor={editor} className={styles.textEditorContent} />
      </div>
    </div>
  );
}

export default App;
