var rect = require('./rectangle');

function solveRect(l, b) {
  console.log("Solving for rectangle with l=" + l + " and b=" + b);

  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log('ERROR:', err.message);
    }
    else {
      console.log(rectangle.area());
      console.log(rectangle.perimeter());
    }
  })

  console.log('This statement is after call to rect')
}

solveRect(2,4);
solveRect(0,5)
