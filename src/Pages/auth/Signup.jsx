import React from 'react'
import { useState } from 'react';
export const Signup = () => {
 
  return (
    // <form className='form'>
    <div className='form'>
      <form >
        <div className='title'>
          <h1>Signup</h1>
        </div>
        <div className="form-group">
          <label for="exampleInputText1">Username</label>
          <input type="text" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" placeholder="Enter Username" />
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Confirm-Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        {/* <div className="sign"> */}
        <div className='button'>
          <button type="submit" className="btn btn-primary">Signup</button>
        </div>
      </form>
    </div>
  )
};

