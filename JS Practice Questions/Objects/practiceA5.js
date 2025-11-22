//5. Access Dynamic Properties 
//Question: Access the role of Charlie dynamically using the key variable. 
const team = { 
Alice: { role: 'Developer', age: 25 }, 
Bob: { role: 'Manager', age: 30 }, 
Charlie: { role: 'Tester', age: 28 }, 
}; 
const key = 'Charlie'; 

const roleOfCharlie=team[key].role;
console.log(team[key].role);
console.log(roleOfCharlie);
//Expected Output: 'Tester'