(function(exports) {

  function testCanBeInstantiated() {
    var noteController = new NoteController();

    assert.isTrue("NoteController can be instantiated", noteController instanceof NoteController)
  }

  testCanBeInstantiated();

})(this);
