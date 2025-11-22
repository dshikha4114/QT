var promiseObject=new Promise((resolve,reject)=>{
    //reject("xyz");
    //reject(100);
    //reject(false);
   //reject({Name:"Deepshikha", Number:9630596191});
   //reject([10,20,30,40,50]);
   reject([{Name:"Deepshikha", Age:27}, {Name:"Priya", Age:27}, {Name:"Shubham Singh", Age:28}]);


});
console.log(promiseObject);