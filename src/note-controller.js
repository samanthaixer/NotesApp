(function(exports){
  function NoteController(noteList){
    this.noteList = noteList;
  }

  NoteController.prototype = {
    updateDOM: function(element){
        var noteListView = new NoteListView(this.noteList);
        element.innerHTML = noteListView.createHTML();

    }

  }

  exports.NoteController = NoteController;

})(this);
