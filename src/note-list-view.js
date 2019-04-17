(function(exports){

  function NoteListView(noteList){
    this.noteList = noteList;
  };

  NoteListView.prototype.createHTML = function () {
    var string = "<ul>"

    if (this.noteList.show().length !== 0) {
      this.noteList.show().forEach(function(note) {
        string += `<li><div>${note.text}</div></li>`;
      });
    };

    return string + "</ul>"
  };

  exports.NoteListView = NoteListView;
})(this);
