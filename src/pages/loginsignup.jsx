import React from 'react'
import '../CSS/loginSignup.css'
const loginsignup = () => {
  return (
    <div className="loginSignup">
      <div className="login_signup_container">
        <h1>Sign Up</h1>
        <div className="login-signup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password' />
        </div>
          <button>Continue</button>
          <p className='login-signup-login'>
            Aready Have an Account?<span>Login Here</span>

          </p>
<div className="login-signup-agree">
  <input type="checkbox" name='' id='' />
  <p>By Continuing, i agree to the terms of use & privacy Policy</p>
</div>
      </div>
    </div>
  )
}

export default loginsignup