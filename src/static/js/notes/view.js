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

    btnAddNote.addEventListener("click", () => {
      this.onNoteAdd();
    });

    [inpTitle, inpBody].forEach((inputField) => {
      inputField.addEventListener("blur", () => {
        const updatedTitle = inpTitle.value.trim();
        const updatedBody = inpBody.value.trim();

        this.onNoteEdit(updatedTitle, updatedBody);
      });
    });

    this.updateNotePreviewVisibility(false);

    console.log("this is root", root);
    console.log(
      "this is handlers",
      onNoteSelect,
      onNoteAdd,
      onNoteEdit,
      onNoteDelete
    );
  }

  _createListItemHTML(id, title, body, updated) {
    const MAX_BODY_LENGTH = 60;

    return `
      <div class="notes__list-item" data-note-id="${id}">
        <div class="notes__small-title">${title}</div>
        <div class="notes__small-body">
        ${body.substring(0, MAX_BODY_LENGTH)}
        ${body.length > MAX_BODY_LENGTH ? "..." : ""}
        </div>
        <div class="notes__small-updated">
          ${updated.toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "short",
          })}
        </div>
      </div>
    `;
  }

  updateNoteList(notes) {
    const notesListContainer = this.root.querySelector(".notes__list");

    notesListContainer.innerHTML = "";
    for (const note of notes) {
      const html = this._createListItemHTML(
        note.id,
        note.title,
        note.body,
        new Date(note.updated)
      );

      notesListContainer.insertAdjacentHTML("beforeend", html);
    }
    notesListContainer
      .querySelectorAll(".notes__list-item")
      .forEach((element) => {
        element.addEventListener("click", () => {
          this.onNoteSelect(element.dataset.noteId);
        });

        element.addEventListener("dblclick", () => {
          const deleteElement = confirm(
            "Are you sure you want to delete this note?"
          );

          if (deleteElement) {
            this.onNoteDelete(element.dataset.noteId);
          }
        });
      });
  }

  updateActiveNote(note) {
    this.root.querySelector(".notes__title").value = note.title;
    this.root.querySelector(".notes__body").value = note.body;

    this.root.querySelectorAll(".notes__list-item").forEach((element) => {
      element.classList.remove("notes__list-item--selected");
    });
    //todo list
    // this.root.querySelector()
  }

  updateNotePreviewVisibility(visible) {
    this.root.querySelector(".notes__preview").style.visibility = visible
      ? "visible"
      : "hidden";
  }
}
