
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error ("Failure: " + assertionToCheck + " response to test");
    } else {
      console.log("Test passed!");
    }
  }
};
//  this is our testing documents kinda. Like jasmine?
