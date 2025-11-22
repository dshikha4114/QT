//1. Remove two elements using splice() 
//Question: Remove "Banana" and "Cherry" from the array. 
//Input: 
const fruits = ["Apple", "Banana", "Cherry", "Date"]; 

const v=fruits.splice(1,2);//splice(start,deleteCount);
console.log(fruits);//Remaining
console.log(v); //Removed
//Expected Output: 
//["Apple", "Date"] 