
var assert = {
  isTrue: function(desc = "DESCRIPTION", assertionToCheck) {
    console.log(desc);
    if (!assertionToCheck) {
      console.log("Failure: " + assertionToCheck + " response to test");
    } else {
      console.log("Test passed!");
    }
  }
};
//  this is our testing documents kinda. Like jasmine?
