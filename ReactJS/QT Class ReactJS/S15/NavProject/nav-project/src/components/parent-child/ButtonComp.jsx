import TextComp from "./TextComp";
import {useState} from "react";
function ButtonComp(){
    const [data, setData]=useState("dummy data");
    const updateState = ()=>{
        setData("New Data");
    };
    return(<div>
        <h2>Button Comp</h2>
        <button onClick={updateState}>Submit</button>
        <br/><br/>
        <hr/><br/>

        <TextComp value={data}/>{/* props name can be anything , it is uptoyou ex:- Data, Value, name, info etc*/ }

    </div>);
}
export default ButtonComp;