// var returnValue = Math.max(2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24);
// console.log(returnValue);

function sum(a,b) {
  return a + b;
};


var list = [10,51];
// console.log(sum(...list))

function sumAll(...add){
  let sum=0;
  for(let number of add){
    sum += number;
  }
  return sum;
}


var list = [10,51,11,12,23,23,23,24,35,45];
console.log(sumAll(...list));
