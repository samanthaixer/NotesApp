(function(exports){
  function NoteController(noteList){
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList);
    this.singleNoteView = new SingleNoteView();

    this.setup();
  }

  NoteController.prototype = {
    updateDOM: function(element) {
        element.innerHTML = this.noteListView.createHTML();
    },

    setup: function() {

      window.addEventListener("hashchange", function(event){

        showAnimalForCurrentPage();

              function showAnimalForCurrentPage() {
                console.log(getAnimalFromUrl(window.location))
                showAnimal(getAnimalFromUrl(window.location));
              };

              function getAnimalFromUrl(location) {
                return location.hash.split("#notes/")[1];
              };

              function showAnimal(animal) {
                document
                  .getElementById("app")
                  // .innerHTML = this.singleNoteView(noteList[animal]).returnDiv();
              };




        // event.preventDefault()
        // location = window.location.hash.split("#")[1];
        // document
        //   .getElementById('app')
        //   .innerHTML = new SingleNoteView(noteList[location]).returnDiv();

      });
    }
  }





  exports.NoteController = NoteController;


})(this);
