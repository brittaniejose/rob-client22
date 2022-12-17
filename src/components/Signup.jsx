import React, { useState } from 'react';

function Signup() {
  const [form, setForm] = useState({firstName: "", lastName: "", email: "", password: ""});

  function handleSubmit() {
  }
  return (
    <div>
        <h1>Sign Up</h1>
      <form>
        <label>First Name</label>
        <input type="text" placeholder='eg: Luke' onChange={(e) => setForm({firstName: e.target.value})}/>
        <label>Last Name</label>
        <input type="text" placeholder='eg: Skywalker' onChange={(e) => setForm({lastName: e.target.value})}/>
        <label>Email</label>
        <input type="text" placeholder='eg: me@google.com' onChange={(e) => setForm({email: e.target.value})}/>
        <label>Password</label>
        <input type="password" onChange={(e) => setForm({password: e.target.value})}/>
        <button type="button" onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
