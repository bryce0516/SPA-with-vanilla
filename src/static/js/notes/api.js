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

  static editNote(id, title, body) {
    const notes = NoteApi.getAllNotes();
    const result = notes.map((element) =>
      element.id === Number(id)
        ? (element = {
            id,
            title,
            body,
            updated: new Date().toISOString(),
          })
        : element
    );
    localStorage.setItem("notes", JSON.stringify(result));
  }

  static deleteNote(id) {
    const notes = NoteApi.getAllNotes();
    const result = notes.filter((element) => element.id !== Number(id));
    localStorage.setItem("notes", JSON.stringify(result));
  }

  static async post() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (response.status === 200) {
        return response.json();
      }
    } catch (error) {
      console.log("error has occured " + error);
    }
  }
}
