$(document).ready(function () {
  // VARIABLES
  // ====================================================================
  // Here we create variables for tracking the number of sandwiches eaten
  // ...
    let pbjcounter =0
    let grilledcheesecounter=0
  // ...

  // FUNCTIONS
  // ====================================================================
  // Here we create various on "click" functions which capture the clicks
  // Inside each click event is the code to create an alert, update the counter, then show the updated count.
  // ...
  $("#pbj").on("click", function () {
      pbjcounter++ //pbjcounter= pbjcounter+1
    console.log("pbj was clicked");
    console.log(pbjcounter);
  });
  $("#grilledcheese").on("click", function () {
      grilledcheesecounter++
      console.log (grilledcheesecounter)
    console.log("grilledcheese was clicked");
  });
});
// ...
