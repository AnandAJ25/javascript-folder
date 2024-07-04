let arr = [1,2,4,5,7]
console.log(arr);
console.log(arr.length);
console.log(arr[0])
console.log(typeof arr);
arr[0]=566;
console.log(arr.toString())
// arr.pop(); 
console.log(arr.join("and"))
/*
shift pop ka bhai hota hai aur unshift push ka bhai hota hai 
a= [1,2,3,4,5,6]
a.pop();
6
console.log(a);
VM311:1 (5) [1, 2, 3, 4, 5]
undefined
a.push(100)
6
a;
(6) [1, 2, 3, 4, 5, 100]
console.log

a.push("anand")
7
a
(7) [1, 2, 3, 4, 5, 100, 'anand']
a.shift()
1
a
(6) [2, 3, 4, 5, 100, 'anand']
a.unshift("anni")
7
a
(7) ['anni', 2, 3, 4, 5, 100, 'anand']

let a1=[1,2,3];
let a2 =[4,5,6];
let a3 =[9,8,7];
a1.concat(a2,a3);
*/

// modifive karta hai values 
let numbers=[1,2,3,4,5];
numbers.splice(1,2,555,666);
console.log(numbers)