// Maps working in javaScript
var user = new Map

user.set(1,'Arun');
user.set(2,'Narun');
user.set(3,'Pandu');
user.set(4,'Sandu');
user.set(5,'Chandu');

console.table(user);
// console.log(user);


for(let [key,value] of user)
{
  // for Loop Every Time Key 1st in Position then Next 2nd Position is value
  console.table(`Key Is :${key} and Value Is:${value}`);

}


// for Each loop Every Time get Value First
// user.forEach((value, key)=>{
//   console.log(value);
//   console.log(key);
// })


// This is Use for Deleting
// user.delete(2)

// console.log(user)
