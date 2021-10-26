export default class NoteApi {
  static getAllNotes() {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");

    return notes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }

  static addNote(title, body) {
    const notes = NoteApi.getAllNotes();
    if (notes.length === 0) {
      const data = {
        id: 1,
        title,
        body,
        updated: new Date().toISOString(),
      };
      notes.push(data);
    } else {
      const data = {
        id: notes[0].id + 1,
        title,
        body,
        updated: new Date().toISOString(),
      };
      notes.push(data);
    }
    localStorage.setItem("notes", JSON.stringify(notes));
  }
}
