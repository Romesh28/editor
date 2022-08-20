import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

export const Editor = (data) =>
  new EditorJS({
    holderId: "editorJS",
    tools: {
      header: {
        class: Header,
        inlineToolbar: ["link"],
      },
      list: {
        class: List,
        inlineToolbar: true,
      },
    },
    data: {
      blocks: data,
    },
  });
