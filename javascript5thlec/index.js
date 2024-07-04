let a = "Anand";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]); 

console.log(a.length);

let real_name= "harry";
let friend = "rohan";
console.log("his name is "+real_name+" and his friend name is "+friend);

// template literals by this we can use single as well as double quote
console.log(`his name is ${real_name} and his friend name is ${friend}`)  


// to do uppercase
let b = "Shivam";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.slice(1 , 4));
console.log(b.slice(1));
console.log(b.replace("Sh","An"))
console.log(b.concat(a));
console.log(b.length);
console.log(b.trim());// removes whitespaces 
// strings are immutable and we donot change the original reference of the strigs 


