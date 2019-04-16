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

  function storesNotes() {
    var noteList = new NoteList;
    var note = new Note("ohyas");
    noteList.store(note);
    assert.isTrue("stores notes", noteList.list.includes(note));
  }

  storesNotes();


  function showsOneNote() {
    var noteList = new NoteList;
    var note = new Note('Yas');
    noteList.store(note);
    assert.isTrue("shows a note", noteList.show() === "Yas");
  }

  showsOneNote();

  function showsTwoNotes() {
    var noteList = new NoteList;
    var note = new Note('Yas');
    var note2 = new Note('Nope');
    noteList.store(note);
    noteList.store(note2);
    assert.isTrue("shows two notes", noteList.show() === '${note.text}\n${note2.text}');
  }

  showsTwoNotes();
})(this);
//  this is our legit tests.
