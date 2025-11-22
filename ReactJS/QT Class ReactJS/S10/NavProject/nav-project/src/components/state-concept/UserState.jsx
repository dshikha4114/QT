import "./UserState.css";
import {useState} from "react";
function UserState(){
    let [state,setState]=useState("https://th.bing.com/th/id/OIP.4Sf5Qzlwrq-0iNoydcGW0wHaLH?w=202&h=303&c=7&r=0&o=5&dpr=1.1&pid=1.7");

    function changeToFemale(){
        return setState("https://th.bing.com/th/id/OIP.vf6tqF3ZfAAvJsEqI5-ubgHaLH?w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2");
    }

    function changeToMale(){
        return setState("https://th.bing.com/th/id/OIP.4Sf5Qzlwrq-0iNoydcGW0wHaLH?w=202&h=303&c=7&r=0&o=5&dpr=1.1&pid=1.7");
    }
    return(
        <div className="userContainer">
            <img src={state} alt="" width="300px" height="300px"/><br/>
            <br/>
            <button onClick={changeToMale}>Male</button>
            <button onClick={changeToFemale}>Female</button>
        </div>
    );
}
export default UserState;