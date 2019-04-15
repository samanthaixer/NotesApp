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
//  this is our legit tests.
