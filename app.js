/*
There are lots of fine details about Javascript that
I find myself reading the documentation for.

These exercises are just some daily practice to stay
sharp.

`node app.js`

node_version: v12.13.1
*/

// exercise 1.
//
// == vs ===

function check_for_equal_value(x, y){
  /*
  This function checks for equality between
  two input parameters and logs to the console
  which type of equality they demonstrate.

  The purpose of this exercise is to demonstrate
  javascripts type coercion behavior and how to
  use it.
  */
  console.log(`x: ${x} ${typeof x}, y: ${y} ${typeof y}`);

  let match = false;

  if (x == y){
    console.log('x == y');
    match = true;
  }

  if (x === y) {
    console.log('x === y');
    match = true;
  }

  if (x != y){
    console.log('x != y');
  }

  if (x !== y) {
    console.log('x !== y');
  }

  if (!match) {
    console.log('x does not equal y in any way.')
  }

  console.log('\n');
}

console.log('\n');

// These are the values we will test with
var integer_49 = 49;
var string_49 = '49';
var integer_50 = 50;
var string_50 = '50';

check_for_equal_value(integer_49, integer_49);
check_for_equal_value(integer_49, integer_50);
check_for_equal_value(integer_49, string_49);
check_for_equal_value("hello world", true);
check_for_equal_value(integer_49, true);
check_for_equal_value(!!true, !false);
check_for_equal_value(!true, false);
check_for_equal_value(['x'], 'x');
check_for_equal_value(null, {});
check_for_equal_value([], null);
check_for_equal_value('', null);
check_for_equal_value([], {});

// exercise 2.
//
// Javascript data types and basic methods

parts = ['fuel line', 'gasket', 'tire']; // Array
price = 99; // Integer
currency = 'USD'; // String

var bike = {
  make: 'kawasaki',
  model: 'xlr650',
  fuel: 3,
  odometer: 1035,
  travel_one_mile: function(){

    if (this.fuel > 0.05){

      this.odometer ++;
      this.fuel = this.fuel - 0.05;

      console.log(`odometer: ${this.odometer}`);
      console.log(`fuel: ${this.fuel}`);

    } else {

      console.log('out of fuel');

    }
    console.log('\n')
  },
} // Object

// Let's go on a motorcycle ride.
// AKA let's call an object method
for (i=1; i<100; i++) {
  bike.travel_one_mile();
}

// Let's look at the keys.
let keys = Object.keys(bike);
console.log(`keys: ${keys}`);
console.log('\n');

// What type is the value of each key?
keys.forEach((key) => {
  console.log(`${key} is a ${typeof bike[key]}`);
  console.log('\n');

});
