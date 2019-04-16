(function(exports) {
  function containsNoteContents() {
    var note = new Note("lil note");
    assert.isTrue("contains note contents", note.text === "lil note");
  };
  containsNoteContents();

  function returnsNoteContents() {
    var note = new Note("YAS");
    assert.isTrue("returns not contents", note.noteContent() === "YAS");
  }
  returnsNoteContents();


})(this);

(function(exports) {
  function containsArray() {
    var noteList = new NoteList;
    assert.isTrue("contains the array", Array.isArray(noteList.list));
  }

  containsArray();

  function createsAndStoresNotes() {
    var noteList = new NoteList;
    noteList.store("ohyas");
    assert.isTrue("creates and stores Notes objects", noteList.list[0] instanceof Note);
    assert.isTrue("Note objects have text attr set up correctly", noteList.list[0].text === "ohyas");
  }

  createsAndStoresNotes();


  function showsOneNote() {
    var noteList = new NoteList;
    note = noteList.store('Yas');
    assert.isTrue("shows a note", noteList.show().includes(note));
  }

  showsOneNote();

  function showsTwoNotes() {
    var noteList = new NoteList;
    note = noteList.store('Yas');
    note2 = noteList.store('Nope');
    assert.isTrue("shows two notes", noteList.show().includes(note) && noteList.show().includes(note2));
  }

  showsTwoNotes();
})(this);
//  this is our legit tests.
