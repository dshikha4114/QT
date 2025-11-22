import {useRef} from 'react';
function RefDOM(){ 
    const h2Ref = useRef(null);//h2Ref ={current:null}   h2Ref ={current:h2DOM} 
    const  updateDOM=()=>{
        h2Ref.current.innerText="Hello Ref"; //h2Ref.current now holding dom element of h2, equal to document.getElementById
        h2Ref.current.style.color="orange";

    }
    return <div style={{padding:"50px"}}>
        <h2 ref={h2Ref}>Welcome to Ref Component</h2>
        <button onClick={updateDOM}>Update UI</button>
    </div>
}
export default RefDOM;