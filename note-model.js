
(function(exports) {

function Note(text){
  this.text = text;
};

exports.Note= Note;
// exports the note so that it's available to the other files.

Note.prototype.noteContent = function () {
  return this.text
}


})(this);
