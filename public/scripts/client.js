console.log('client js sourced'); // debug mode

$(document).ready(function() {
  console.log('jQuery is sourced'); // debug mode

  $(document).on('click', '#someBtn', logClick);

  function logClick() {
    console.log('click'); // debug mode
  }
}); // document ready end
