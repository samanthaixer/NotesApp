(function(exports) {

  function testCanBeInstantiated() {
    var noteController = new NoteController();

    assert.isTrue("NoteController can be instantiated", noteController instanceof NoteController)
  }

  function testTakesANoteListArgument(){
    var noteList = "";
    var noteController = new NoteController(noteList);

    assert.isTrue("NoteController constructor accepts an argument", noteController.noteList === "")
    assert.isTrue("NoteController constructor accepts an argument", noteController.noteList === noteList)

  }

  testCanBeInstantiated();
  testTakesANoteListArgument();

})(this);
