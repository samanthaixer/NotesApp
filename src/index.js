window.addEventListener('load', function() {
  var noteList = new NoteList();
  noteList.store("Favourite band: Young Fathers")
  var app = new NoteController(noteList);
  app.updateDOM(document.getElementById('app'));
});
