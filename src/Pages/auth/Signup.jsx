import React from 'react'
import { useState } from 'react';
import '../styles.css';
export const Signup = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [show, setShow] = useState(false);

  const handleOnChangeValues = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData, [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.username.length);

    if (formData.username.length <5) {
      alert('invalid  username format')
      setShow(false);
      return;
    }
    // else {
    //   setShow(true);
    //   // return;
    // }
    let re = /\S+@\S+\.\S+/;
    if (!(re.test(String(formData.email).toLowerCase()))) {
      alert("invalid email format");
      setShow(false);
      return;
    }
    // else {
    //   setShow(true);
    //   return;
    // }
    if (!(formData.password.length >=8 && /\d/.test(formData.password) && /[!@#$%^&*]/.test(formData.password))) {
      alert("Invalid password format,Atleast one uppercase,lowercase Digit and special character are necessary");
      setShow(false);
      return;
    }
    // else {
    //   setShow(true);
    //   // return;
    // }
    if (!(formData.password === formData.confirmPassword)) {
      alert("passwords donot match");
      setShow(false);
      return;
    }
    else {
      alert("Form submitted successfully");
      setShow(true);
    }

  };



  return (
    // <form className='form'>
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='title'>
          <h1>Signup</h1>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputText1">Username</label>
          <input type="text" onChange={(e) => handleOnChangeValues(e)} required name="username" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" placeholder="Enter Username" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input required onChange={(e) => handleOnChangeValues(e)} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input required onChange={(e) => handleOnChangeValues(e)} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm-Password</label>
          <input required type="password" onChange={(e) => handleOnChangeValues(e)} name="confirmPassword" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        {/* <div className="sign"> */}
        <div className='button'>
          <button type="submit" className="btn btn-primary">Signup</button>
        </div>
      </form>
      {show && <div className="ephs">
        <div className='EPs'>
        <h4>{formData.username}</h4>
          <h4>{formData.email}</h4>
          <h5> {formData.password}</h5>
        </div>
      </div>}
    </div>
  )
};

