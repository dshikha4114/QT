import {useState} from 'react';
function StateCom(){
    let info = useState(999);//data=[]

    function updateState(){
        //call setter function of useState();
        info[1]("React JS");
    }


    return <div style={{textAlign:"center", margin:"50px auto" ,width:"500px", boxShadow:"0 0 10px" , padding:"30px"}}>
    <h2 style={{margin:"20px 0px", color:"Green"}}>State Concept : {info[0]}</h2>
    <button onClick={updateState}>Update State</button>
    </div>
}

export default StateCom;