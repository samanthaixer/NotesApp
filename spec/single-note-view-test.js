(function(exports){
  function testSingleNoteViewConstructor(){
    note = new Note("Happy Days");
    var singleNoteView = new SingleNoteView(note);
    assert.isTrue("constructs a Single Note View", singleNoteView instanceof SingleNoteView);
    assert.isTrue("takes a note in to the constructor", singleNoteView.note === note)

  }
testSingleNoteViewConstructor();

function testSingleNoteViewReturnsDiv() {
  var note = new Note("Favourite band: Bon Jovi")
  var singleNoteView = new SingleNoteView(note)
  assert.isTrue("returns a div with the note text", singleNoteView.returnDiv() === "<div>Favourite band: Bon Jovi</div>")
}

testSingleNoteViewReturnsDiv();

})(this);
