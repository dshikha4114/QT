function createPromise(){
  return new Promise((resolve,reject)=>{
            resolve({ok:true,
                result:[{name:"xyz"},{name:"abc"}]})})};
    

var promiseObject = createPromise();
console.log(promiseObject);

promiseObject.then((success)=>{
    console.log("success");
    console.log(success);
}).catch((error)=>{
    console.log("Error");
    console.log(error);});