var promiseObject=new Promise((resolve,reject)=>{
    //resolve("xyz");
    //resolve(100);
    //resolve(false);
   //resolve({Name:"Deepshikha", Number:9630596191});
   //resolve([10,20,30,40,50]);
   resolve([{Name:"Deepshikha", Age:27}, {Name:"Priya", Age:27}, {Name:"Shubham Singh", Age:28}]);


});
console.log(promiseObject);