function createPromise(){
    var promiseObject=new Promise((resolve,reject)=>{
        resolve([{Name:"Deepshikha", Age:27}, {Name:"Priya", Age:27}, {Name:"Shubham Singh", Age:28}]);
    });

    return promiseObject;
}

async function myFunc(){
    //Inside the async function only we can use await operator
    //Await operator is used with the function which return Promise Object
    let data = await createPromise(); //Function Should Return Promise
    console.log(data);
}

myFunc();
