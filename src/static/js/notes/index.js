import initialTemplate from "../common/initialTemplate";
import NoteView from "./view";

export default class Notes extends initialTemplate {
  constructor(root) {
    super();
    this.setTitle("Notes");
    this.viewPage = new NoteView(root, this.handlers());
  }

  handlers() {
    return {
      onNoteSelect: () => {
        console.log("onNoteSelect");
      },
      onNoteAdd: () => {
        console.log("onNoteAdd");
      },
      onNoteEdit: (title, body) => {
        console.log("onNoteEdit", title, body);
      },
      onNoteDelete: () => {
        console.log("onNoteDelete");
      },
    };
  }
}
