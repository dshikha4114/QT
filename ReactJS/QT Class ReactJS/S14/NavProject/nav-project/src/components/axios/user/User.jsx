import "./User.css";
function User(){
         //filter users based on gender selection
         const filteredUsers=users.filter((user)=>{
            if(genderFilter==="all") return true;
            return user.gender===genderFilter;
        });
    return (
        <h2 style={{color:"orange", textAlign:"center"}}>Number of users:{filteredUsers.length}</h2>
        <div className="usersDataContainer">
        {
           filteredUsers.map((element)=>{//here instead of users , filtered users taken according to the radio button clicked.
               //element here is object which contains 30
               //element= {gender:"m/f",picture:{l:"",m:""},name:{title:"",first:"",last:""}}
               return(
                   <div className="card">
                       <img src={element.picture.medium} width={250} height={250}/>
                       <h3>{`${element.name.title} ${element.name.first} ${element.name.last}`}</h3>
                       <p style={{color:"green"}}>{element.gender}</p>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit!</p>
                   </div>
                        );
                    })
        }

        </div>

    );

       


    
}
export default User;