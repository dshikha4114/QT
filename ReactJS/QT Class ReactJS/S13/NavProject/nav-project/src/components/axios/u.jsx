//Copied this code from chatgpt for given task for session 13 for the Users.jsx file inside axioss

import "./Users.css";
import { useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [genderFilter, setGenderFilter] = useState("all");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const getUsers = () => {
    axios
      .get("https://randomuser.me/api/?results=30")
      .then((res) => {
        console.log(res.data.results);
        setUsers(res.data.results);
        // Disable the button once data is fetched
        setButtonDisabled(true);
      })
      .catch((error) => {
        alert("Failed to fetch users");
        console.log(error);
      });
  };

  // Filter users based on gender selection
  const filteredUsers = users.filter((user) => {
    if (genderFilter === "all") return true;
    return user.gender === genderFilter;
  });

  return (
    <div className="usersContainer">
      <h1>Users information</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima
        autem facere pariatur! Molestias, officiis ea deserunt officia accusamus
        laboriosam error consequuntur optio aperiam nemo voluptatum neque enim!
        Ipsa aliquid facilis quia necessitatibus tempora rerum quasi obcaecati
        eveniet, rem mollitia minus provident expedita sint voluptates magnam eos
        ipsum. Natus, necessitatibus rerum, veritatis provident consequatur
        repellat voluptatum at maiores nostrum, facilis assumenda maxime consequuntur
        quo harum. Quis aliquid dolores distinctio modi quas. Pariatur ad nostrum
        odit eum tempora sed rem, culpa error libero dicta nisi fuga autem sint
        officia doloribus officiis mollitia? A sequi id incidunt ipsa modi nesciunt
        accusantium inventore.
      </p>
      <button onClick={getUsers} disabled={buttonDisabled}>
        Get Users
      </button>

      {/* Only show radio buttons if there is data */}
      {users.length > 0 && (
        <div className="genderContainer">
          <div>
            <input
              type="radio"
              name="gender"
              value="all"
              checked={genderFilter === "all"}
              onChange={() => setGenderFilter("all")}
            />
            <label>All</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={genderFilter === "male"}
              onChange={() => setGenderFilter("male")}
            />
            <label>Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={genderFilter === "female"}
              onChange={() => setGenderFilter("female")}
            />
            <label>Female</label>
          </div>
        </div>
      )}

      <h2 style={{ color: "orange", textAlign: "center" }}>
        Number of users: {filteredUsers.length}
      </h2>

      <div className="usersDataContainer">
        {filteredUsers.map((element, index) => {
          // element = {gender:"male/female", picture:{large:"", medium:""}, name:{title:"", first:"", last:""}}
          return (
            <div className="card" key={index}>
              <img src={element.picture.medium} width={250} height={250} alt="User" />
              <h3>{`${element.name.title} ${element.name.first} ${element.name.last}`}</h3>
              <p style={{ color: "green" }}>{element.gender}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
                reprehenderit!
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;

Explanation
1)Conditional Rendering for Radio Buttons:
The radio button group is only rendered if users.length > 0 (requirement 1 & 2).
In JSX, the && operator is commonly used for conditional rendering. Here's how it works in your code:

Condition Check:
The expression users.length > 0 is evaluated first. If there are users (i.e., the length is greater than 0), it returns true.

Short-Circuit Evaluation:
With the logical AND (&&), if the first condition is true, then the expression after && (your <div className="genderContainer">...</div>) gets rendered. If the condition is false (meaning no users are available), the expression after && is skipped, and nothing is rendered for that part.

Practical Outcome:
This means that the radio button group will only appear in the UI once the users array has at least one element. Until then, it stays hidden.

This approach is a clean way to conditionally show components based on your application's state.



2)Button Disabling:
The button is enabled initially. After fetching the data successfully, setButtonDisabled(true) disables it so that it cannot be clicked again (requirement 3).
setButtonDisabled(true); //Find this in copilot



3) Gender Filtering:
A new state genderFilter (defaulting to "all") is introduced. The filteredUsers array is computed by filtering users based on this state. Changing the radio buttons updates genderFilter, and the list of displayed users and the number count update accordingly (requirements 4, 5, and 6).

The callback function  is passed here to handle the  event of a form element, such as a dropdown or input. Let's break it down:
Reasons for Using a Callback Function:

Why Not Call Directly?
If you passed  directly instead of wrapping it in a callback like , it would execute immediately during render, not when the  event occurs. Wrapping it in an arrow function ensures it only executes when triggered by the event.

