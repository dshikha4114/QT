//4. Function with Default Parameters 
//Question: 
//Create a function greet that takes a name and prints "Hello, <name>!". If no name is 
//provided, default to "Guest". 
//Input: 
//greet(); 
//greet("John"); 
//Expected Output: 
//Hello, Guest! 
//Hello, John! 

var Name;
function greet(Name="Guest"){
    console.log(`Hello, ${Name}!`);
}

