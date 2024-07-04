// console.log("hey anni you are so much cute ");
// console.log("hey anni you are so much dashing");
// console.log("hey anni you are so much pro ");
// console.log("hey anni you are so much smart ");

// if we have to do this for multi people then we have to make function so whenever we want to alter it we can alter it


// we make function when we want to do repetative things we will directly call the function for this 

function nice(name) {
    console.log("Hey"+ name +"You are nice!")
    console.log("Hey"+ name +"You are dashing!")
    console.log("Hey"+ name +"You are good!")
    console.log("Hey"+ name +"You are very talented!")    
}
// calling the function 
// nice(" Anand ");

// function to find sum in js 
function sum(a,b) {
    // console.log(a+b);
    return a + b ;

}
let result = sum(5,5);
let result1 = sum(10,5);
let result2 = sum(15,5);
/*
console.log("The sum of the numbers is: ",result);
console.log("The sum of the numbers is: ",result1);
console.log("The sum of the numbers is: ",result2);
*/


//arrow function

const func1 = (x)=>{
    console.log("I am arrow function",x);

}
func1(34);
func1(55);
func1(67);