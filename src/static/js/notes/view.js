export default class NoteView {
  constructor(root, handlers) {
    const { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = handlers;
    this.root = root;
    this.onNoteSelect = onNoteSelect;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteDelete = onNoteDelete;
    this.root.innerHTML = `
            <div class="notes__sidebar">
                <button class="notes__add" type="button">Add Note</button>
                <div class="notes__list"></div>
            </div>
            <div class="notes__preview">
                <input class="notes__title" type="text" placeholder="New Note...">
                <textarea class="notes__body">Take Note...</textarea>
            </div>
        `;

    const btnAddNote = this.root.querySelector(".notes__add");
    const inpTitle = this.root.querySelector(".note.__title");
    const inpBody = this.root.querySelector(".notes__body");

    console.log("this is root", root);
    console.log(
      "this is handlers",
      onNoteSelect,
      onNoteAdd,
      onNoteEdit,
      onNoteDelete
    );
  }
}
