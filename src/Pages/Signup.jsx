import React from 'react'
import { useState } from 'react';
export const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [Password, setPassword] = useState("");   
     const [ConfirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
   
    const handleSubmit=(e)=>{
      e.preventDefault();

      if(username.length<6)
      {
        setError("username must be atleast 6 letters");
        return;
      }
      if(!email)
      {
        setError("incorrect email format");
        return;
      }
      if(Password.length<6 || !/\d/.test(Password) || !/[!@#$%^&*]/.test(Password))
      {
        setError("password must contain atleast 6 letter including digits and special characters");
        return;
      }
      if(Password!==ConfirmPassword)
      {
        setError("password not matched");
        return;
      }
      if(Password===ConfirmPassword)
      {
        setError("");
        alert("Form submitted successfully");
        return;
      }


      alert("Form Submitted Successfully");
    }
    return (
        <form className="Signup" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div> 
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div> 
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder='password' value={Password} onChange={(e) => setPassword(e.target.value)} />
            </div> <div>
                <label htmlFor="password">Confirm Password:</label>
                <input type="password" id="password" placeholder='password' value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button type='submit'>Submit</button>
            {error && <p className='spa'>{error}</p>}
        </form>
    )
};

