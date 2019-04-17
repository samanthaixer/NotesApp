(function(exports) {
  function containsNoteContents() {
    var note = new Note("lil note");
    assert.isTrue("contains note contents", note.text === "lil note");
  };
  containsNoteContents();

  function returnsNoteContents() {
    var note = new Note("YAS");
    assert.isTrue("returns note contents", note.noteContent() === "YAS");
  }
  returnsNoteContents();

  function testNoteAcceptsId() {
    var note = new Note("Text", 1);
    assert.isTrue("accepts a number as the ID", note.getId() === 1);
  }

  testNoteAcceptsId();

})(this);
