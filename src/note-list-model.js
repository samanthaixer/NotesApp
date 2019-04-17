
(function(exports) {

  function NoteList(note = Note){
    this.list = [];
    this.note = note;
  };

  NoteList.prototype.store = function(text){
    note = new this.note(text);
    this.list.push(note);
    return note;
  };

  NoteList.prototype.show = function(){
    return this.list;
  };

  exports.NoteList= NoteList;
})(this);
