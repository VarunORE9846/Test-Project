import React, { useState } from 'react'
import { Layout } from './layout';

export const Login = () => {
  const [payload, setPayload] = useState({
    email:'',
    password:''
  }) 
  const handleOnChangeValues = (e) => {
    
    const { name, value } = e.target;
    setPayload(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(payload);
  }
  return (
    <div className='form'>
      <form method='post' onSubmit={handleSubmit}>
        <div className='title'>
          <h1>Login</h1>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" name='email'
           aria-describedby="emailHelp" onChange={handleOnChangeValues} placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" name='password' className="form-control"  onChange={handleOnChangeValues} id="exampleInputPassword1" placeholder="Password" />
        </div>
         
        <div className='button'>
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  )

    
   
};

