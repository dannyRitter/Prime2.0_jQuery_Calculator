console.log('client js sourced'); // debug mode

// global variables
var defaultValue = 0;
var operator = '';


// click functions


// AJAX calls

function sendToServer(){
  var address = "/" + operator;

  newObject = {
          x: someNumber,
          y: anotherNumber
          };
  console.log('sending object to server for calculation:', newObject, address);
  $.ajax({
    url: address,
    type: 'POST',
    data: newObject,
    success: function(response){
      console.log('received from server: ', response);
      solution(response.answer);
    }
  }); // end ajax call

} // end sendToServer

$(document).ready(function() {
  console.log('jQuery is sourced'); // debug mode

  // initializeApp();

  $(document).on('click', '#someBtn', logClick);
  function logClick() {
    console.log('click'); // debug mode
  }
}); // document ready end
