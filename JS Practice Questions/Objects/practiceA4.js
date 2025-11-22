//4. Filter by Nested Property 
//Question: Retrieve all tasks assigned to the employee Alice. 
const projects = [ 
  { 
    project: 'Website', 
    tasks: [ 
      { task: 'Design', assignedTo: 'Alice' }, 
      { task: 'Code', assignedTo: 'Bob' }, 
    ], 
  }, 
  { 
    project: 'App', 
    tasks: [ 
      { task: 'Develop', assignedTo: 'Alice' }, 
      { task: 'Test', assignedTo: 'Charlie' }, 
    ], 
  }, 
]; 

const aliceTasks = []
for (const project of projects) {

    //console.log(project.tasks);
    for (const taskname of project.tasks) {
        //console.log("taskname",task);
        if(taskname.assignedTo=='Alice'){
            //console.log(taskname);
            aliceTasks.push(taskname);
        }
    }
    // for (const tasks of projects.tasks) {
    //     console.log(tasks)
    // }
    
    
}
console.log(aliceTasks);



 
//Expected Output: 
//[ 
  //{ task: 'Design', assignedTo: 'Alice' }, 
  //{ task: 'Develop', assignedTo: 'Alice' }, 
//] 