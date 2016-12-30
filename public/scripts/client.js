// global variables
var debug = true;
var defaultValue = 0;
var operator = '';


if (debug) console.log('client js sourced'); // debug mode

// click functions


// AJAX calls

function sendToServer(){
  var address = "/" + operator;

  newObject = {
          x: someNumber,
          y: anotherNumber
          };
  if (debug) console.log('sending object to server for calculation:', newObject, address);
  $.ajax({
    url: address,
    type: 'POST',
    data: newObject,
    success: function(response){
      if (debug) console.log('received from server: ', response);
      solution(response.answer);
    }
  }); // end ajax call

} // end sendToServer

$(document).ready(function() {
  if (debug) console.log('jQuery is sourced'); // debug mode

  // initializeApp();

  $(document).on('click', '#someBtn', logClick);
  function logClick() {
    if (debug) console.log('click'); // debug mode
  }
}); // document ready end
