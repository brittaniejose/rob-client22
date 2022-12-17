import React, { useState } from 'react';

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }
    console.log(user, "user obj @ signup form ln 17")
    const response = await fetch('http://localhost:5000/users/signup', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    });
    
    const resUser = await response.json()
    console.log(resUser);
  }

  return (
    <div>
        <h1>Sign Up</h1>
      <form>
        <label>First Name</label>
        <input type="text" placeholder='eg: Luke' onChange={(e) => setFirstName(e.target.value)}/>
        <label>Last Name</label>
        <input type="text" placeholder='eg: Skywalker' onChange={(e) => setLastName(e.target.value)}/>
        <label>Email</label>
        <input type="text" placeholder='eg: me@google.com' onChange={(e) => setEmail(e.target.value)}/>
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        <button type="button" onClick={(e) => handleSubmit(e)}>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
