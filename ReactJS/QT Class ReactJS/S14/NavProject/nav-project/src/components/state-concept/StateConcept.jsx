import {useState} from 'react';
function StateConcept(){
    let data = useState(0);//data=[]

    function updateState(){
        data[1]("React JS");
    }


    return <div style={{textAlign:"center", marginTop:"50px"}}>
    <h2 style={{margin:"20px 0px", color:"Green"}}>State Concept : {data[0]}</h2>
    <button onClick={updateState}>Update State</button>
    </div>
}

export default StateConcept;