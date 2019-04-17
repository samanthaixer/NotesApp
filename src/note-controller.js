(function(exports){
  function NoteController(noteList){
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype = {
    updateDOM: function(element){
        element.innerHTML = this.noteListView.createHTML();
    }
  }

  exports.NoteController = NoteController;

})(this);
