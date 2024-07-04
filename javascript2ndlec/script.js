console.log("Hello i am conditional tutorial");

let age = 15;
let grace = 4;
/*
 console.log(age + grace);
 console.log(age ** grace);
 console.log(age % grace);
*/


if ((age + grace) > 18) {
    console.log('You can drive');
}
else {
    console.log('you can not drive');
}

// ternanry operator
a = 6;
b = 8;

// variable = ( condition) ? (if codition satisfy) : (if condition donot satisfy)

let c = a > b ? (a - b) : (b - a);
console.log(c);