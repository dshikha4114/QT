function createPromise(){
    return new Promise((resolve,reject)=>{
              resolve({ok:true,
                  result:[{name:"xyz"},{name:"abc"}]})})};
      
  
  
  async function handlePromise(){
    var data = await createPromise();
    console.log(data);
  }

  handlePromise();