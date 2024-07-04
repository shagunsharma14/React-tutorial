import React from 'react'
import './Login.css'

function Login() {
  return (
    <form class="login-form">
    <h1>Login</h1>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" placeholder="Username" required></input>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" placeholder="Password" required></input>
    <button type="submit">Log In</button>
  </form>
  )
}

export default Login