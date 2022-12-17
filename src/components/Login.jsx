import React from 'react'

function Login() {
  return (
    <div>
        <h1>Login</h1>
      <form>
        <label>Email</label>
        <input type="text" placeholder='eg: me@google.com'/>
        <label>Password</label>
        <input type="password"/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
