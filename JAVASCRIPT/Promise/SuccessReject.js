var promiseObject=new Promise((resolve,reject)=>{
    reject([{
        ok:false,
        error:"Something went wrong"
    }]);
    resolve([{Name:"Deepshikha", Age:27}, {Name:"Priya", Age:27}, {Name:"Shubham Singh", Age:28}]);
 
 });
 promiseObject.then((successdata)=>{
     console.log("Success Data");
     console.log(successdata);
 }).catch((errordata)=>{
     console.log("Failure/Error Data");
     console.log(errordata);
 });