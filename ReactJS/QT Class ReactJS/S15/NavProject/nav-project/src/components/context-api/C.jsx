import D from "./D";

function C(){
    return <div style={{
        width:"400px",
        margin:"20px auto",
        textAlign:"center",
        padding:"20px",
        boxShadow:"0 0 10px blue"

    }}>
            <h2>C Component</h2>
            {/* <D  info={value}/> */}
            <D/>

           </div>
}

export default  C;
