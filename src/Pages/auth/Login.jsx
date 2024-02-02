import React, { useState } from 'react'
import { Layout } from './layout';
import '../styles.css';

export const Login = () => {
  const [cred, setCred] = useState({
    Email: "varun@gmail.com",
    Password: "Welcome@123"
  })


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);


  const handleOnChangeValues = (e) => {

    const { name, value } = e.target
    if (name === 'email') {
      setEmail(value)
    }
    if (name === "password") {
      setPassword(value)
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(email, password);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    if (email === cred.Email && password === cred.Password) {
      alert("Form submitted successfully");
      setShow(true);
      return;
    } else {
      console.log('here');
      alert("credentials don't match");
      setShow(false)
      return;
    }
  };

  return (
    <>
      <div className='form'>
        <form method='post' onSubmit={handleSubmit}>
          <div className='title'>
            <h1>Login</h1>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" required id="exampleInputEmail1" name='email'
              aria-describedby="emailHelp" onChange={(e) => handleOnChangeValues(e)} placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" name='password' required className="form-control"
              onChange={(e) => handleOnChangeValues(e)} id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className='button'>
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
      {show && <div className="eph">
        <div className='EP'>
          <h4>{email}</h4>
          <h5> {password}</h5>
        </div>
      </div>}
    </>
  )



};

