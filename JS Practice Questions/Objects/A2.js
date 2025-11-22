//2. Update a Nested Property 
//Question: Update the salary of the employee Bob to 75000. 
const employees = [ 
  { 
    id: 1, 
    name: 'Alice', 
    details: { 
      salary: 50000, 
      role: 'Developer', 
    }, 
  }, 
  { 
    id: 2, 
    name: 'Bob', 
    details: { 
      salary: 60000, 
      role: 'Manager', 
    }, 
  }, 
]; 
 
employees[1].details.salary=75000;
console.log(employees);
