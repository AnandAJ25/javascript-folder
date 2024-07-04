/* create a calculator using javascript
this faulty calculator does following:
it performs wrong operations as follows_
 +----> -
 *----> +
 - ---> /
 / ---> **

*/

let random = Math.random();
console.log(random);
let a = prompt("enter the first number");
let c = prompt("enter the operation");
let b = prompt("enter the second number");

let obj={
    "+":"-",
    "*":"+",
    "/":"**",
    "-":"/"
}


if(random>0.1){
    //perform correct calculations
    // eval() //it will do the calculations
    console.log(`the result is ${a} ${c} ${b}`)
 alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}

 else{
    c=obj[c];
    // console.log(`the result is ${a} ${c} ${b}`)
   alert(`the result is ${eval(`${a} ${c} ${b}`)}`) 
   }