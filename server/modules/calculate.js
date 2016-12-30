var calculateMe = function(req, res){
  console.log('inside post route');
  console.log('req.body from post = ', req.body);

  var operator = req.body.operator;
  var x = Number(req.body.x);
  var y = Number(req.body.y);


//   switch(operator) {
//     case 'add': ,
//     default:
//         console.log('nice post... but no... it broke');
//         res.sendStatus(400);
//   }
//
};

module.exports = calculateMe;
