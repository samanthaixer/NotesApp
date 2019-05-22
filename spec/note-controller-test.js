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

  function testInnerHTMLOfElementChanges() {
    var noteList = new NoteList();
    noteList.store("Fave drink: prosecco");
    var noteController = new NoteController(noteList);

    var elementDouble = function() {
      this.innerHTML = ""
    }

    noteController.updateDOM(elementDouble);

    assert.isTrue("NoteController changes the inner HTML of an element", elementDouble.innerHTML === '<ul><li><div><a href="http://localhost:8080#notes/0">Fave drink: prosecco</a></div></li></ul>')
  }

  function testSingleNoteFullView() {
    var noteList = new NoteList();
    noteList.store("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
    var noteController = new NoteController(noteList);

    var elementDouble = function() {
      this.innerHTML = ""
    }

    noteController.updateDOM(elementDouble)

    console.log(elementDouble.innerHTML)
    assert.isTrue("NoteController changes the inner HTML to full text", elementDouble.innerHTML === '<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>')

  }

  testCanBeInstantiated();
  testTakesANoteListArgument();
  testInnerHTMLOfElementChanges();
  testSingleNoteFullView();

})(this);
