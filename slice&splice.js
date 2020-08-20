// Topic slice and splice

var users=["kernel", "Akash", "sarkar", "sanjay", "Bishwa"]

// console.log(user);

// 1 position is inclusive and 3 position is exclusive
// console.log(users.slice(1 ,3))

// splice is position - count value delete and set value
users.splice(2,1,"hello", "hii")
console.log(users);
