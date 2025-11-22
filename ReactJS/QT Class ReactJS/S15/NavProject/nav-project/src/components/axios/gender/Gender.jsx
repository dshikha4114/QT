import "./Gender.css";
import {useContext} from "react";
import usersContext from "../usersContext";

function Gender(){
    const {data,fnGetUser}=useContext(usersContext);
    const [users,,genderFilter,setGenderFilter]=data;
    const [,filteredUsers]=fnGetUser;

    // const handleGenderChange = (event) => {
    //     setGenderFilter(event.target.value);
    // };
    //i can use this in onChange={handleGenderChange} of all radio button

// first if (users.length === 0) return null; // Don't render if there are no users
// Second return <div className="genderContainer"></div>

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
           
       <h2 style={{color:"orange", textAlign:"center"}}>Number of Users:  {filteredUsers.length}</h2>

        </div>
        ) )
    
        

    
    
    
}
    
    

export default Gender;