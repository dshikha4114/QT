import "./Gender.css";
const [genderFilter,setGenderFilter]=useState("all");
function Gender(){

   
   
        {/* Only show radio button when there is data */}
        return (users.length>0 && (
            <div className="genderContainer">
            <div>
                <input type="radio" name="gender" value="all" checked={genderFilter==="all"} onChange={()=>{setGenderFilter("all")}}/>  {/*defaultChecked*/}
                <label>All</label>
                </div>
            <div>
                <input type="radio" name="gender" value="male" checked={genderFilter==="male"} onChange={()=>{setGenderFilter("male")}}/>
                <label>Male</label>
            </div>
            <div>
                <input type="radio" name="gender" value="female" checked={genderFilter==="female"} onChange={()=>{setGenderFilter("female")}}/>
                <label>Female</label> 
            </div>
        </div>
        ) 
    
    
       

    
)}
export default Gender;