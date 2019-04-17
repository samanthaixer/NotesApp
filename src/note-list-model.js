
(function(exports) {

  function NoteList(note = Note){
    this.list = [];
    this.note = note;
    this.counter = 0;
  };

  NoteList.prototype.store = function(text){
    note = new this.note(text, this.counter);
    this.list.push(note);
    this.counter += 1;
    return note;
  };

  NoteList.prototype.show = function(){
    return this.list;
  };

  exports.NoteList= NoteList;
})(this);
