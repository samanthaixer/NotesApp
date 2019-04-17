(function(exports) {

  function NoteController(noteList){
      this.noteList = noteList;
      noteList.store('Favourite drink: margarita')
      this.noteListView = new NoteListView(noteList)
      this.updateDOM();
  }

  NoteController.prototype = {
    updateDOM: function() {
      var element = document.getElementById('app');
      element.innerHTML = this.noteListView.createHTML()
    }
  }

  exports.NoteController = NoteController;

})(this);
