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

  function testCreatesNoteWithID() {
    var noteList = new NoteList();
    noteList.store("hey")
    noteList.store("hiya")
    assert.isTrue("creates a note with id 0", noteList.list[0].getId() === 0)
    assert.isTrue("creates a note with id 1", noteList.list[1].getId() === 1)
  }

  testCreatesNoteWithID();

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
