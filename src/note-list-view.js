(function(exports){

  function NoteListView(noteList){
    this.noteList = noteList;
  };

  NoteListView.prototype.createHTML = function () {
    var string = "<ul>"

    if (this.noteList.show().length !== 0) {
      this.noteList.show().forEach(function(note) {
        string += `<li><div><a href="http://localhost:8080#notes/${note.id}">${note.text.substring(0, 20)}</a></div></li>`;
      });
    };

    return string + "</ul>"
  };

  exports.NoteListView = NoteListView;
})(this);
