
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error ("EXTRA NO: " + assertionToCheck + " Is a mess");
    } else {
      console.log("Test passed! (yas)");
    }
  }
};
//  this is our testing documents kinda. Like jasmine?
