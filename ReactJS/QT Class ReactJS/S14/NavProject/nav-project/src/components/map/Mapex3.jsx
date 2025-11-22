
function Mapex2(){
    //var info=["s1","s2","s3"];
    var arrayData=["html","css","js","react","nodejs"]
    return <div style={{textAlign:"center", marginTop:"100px"}}>
        {/* <ul>
            <li>{arrayData[0]}</li>
            <li>{arrayData[1]}</li>
            <li>{arrayData[2]}</li>
            <li>{arrayData[3]}</li>
            <li>{arrayData[4]}</li>
        </ul> */}

        <ul>
            {
            arrayData.map((element , index, array)=>{
                return <li>{element}</li>
            })
            }
        </ul>

        

    

            </div>
}
export default Mapex2;