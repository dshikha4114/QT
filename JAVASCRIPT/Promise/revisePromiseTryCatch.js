function createPromise(){
    return new Promise((resolve,reject)=>{
              reject({ok:true,
                  result:[{name:"xyz"},{name:"abc"}]})})};
      
  
  
  async function handlePromise(){
    try{
        var data = await createPromise();
        console.log("Try Block/Success Block");
        console.log(data);
    }catch(error){
        console.log("Catch Block/Error Block");
        console.log(error);}}

  handlePromise();