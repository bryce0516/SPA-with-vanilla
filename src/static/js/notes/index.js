import initialTemplate from "../common/initialTemplate";
import NoteApi from "./api";
import NoteView from "./view";
export default class Notes extends initialTemplate {
  constructor(root) {
    super();
    this.notes = [];
    this.activeNote = null;
    this.setTitle("Notes");
    this.viewPage = new NoteView(root, this.handlers(), this.notes);

    this._refresh();
  }

  handlers() {
    return {
      onNoteSelect: (id) => {
        const selectedNote = this.notes.find(
          (element) => element.id === Number(id)
        );
        this.viewPage.updateActiveNote(selectedNote);
      },
      onNoteAdd: (title, body) => {
        NoteApi.addNote(title, body);
        this._refresh();
      },
      onNoteEdit: (title, body) => {
        console.log("onNoteEdit", title, body);
      },
      onNoteDelete: () => {
        console.log("onNoteDelete");
      },
    };
  }

  _refresh() {
    const notes = NoteApi.getAllNotes();
    this._setNote(notes);
    if (notes.length > 0) {
      this._setActiveNote(notes[0]);
    }
  }

  _setNote(notes) {
    this.notes = notes;
    this.viewPage.updateNoteList(notes);
  }

  _setActiveNote(notes) {
    this.activeNote = notes;
  }
}
