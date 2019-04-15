(function(exports) {
  function containsNoteContents() {
    var note = new Note("lil note");
    assert.isTrue(note.text === "lil note");
  };
  containsNoteContents();

  function returnsNoteContents() {
    var note = new Note("YAS");
    assert.isTrue(note.noteContent() === "YAS");
  }
  returnsNoteContents();


})(this);

(function(exports) {
  function containsArray() {
    var noteList = new NoteList;
    assert.isTrue(Array.isArray(noteList.list));
  }

  containsArray();

  function storesNotes() {
    var noteList = new NoteList;
    var note = new Note("ohyas");
    noteList.store(note);
    assert.isTrue(noteList.list.includes(note));
  }

  storesNotes();


  function showsOneNote() {
    var noteList = new NoteList;
    var note = new Note('Yas');
    noteList.store(note);
    assert.isTrue(noteList.show() === "Yas");
  }

  showsOneNote();

  function showsTwoNotes() {
    var noteList = new NoteList;
    var note = new Note('Yas');
    var note2 = new Note('Nope');
    noteList.store(note);
    noteList.store(note2);
    console.log(noteList.show());
    assert.isTrue(noteList.show() === '${note.text}\n${note2.text}');
  }

  showsTwoNotes();
})(this);
//  this is our legit tests.
