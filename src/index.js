window.addEventListener('load', function() {
  var noteList = new NoteList();
  var app = new NoteController(noteList);
  app.updateDOM();
});
