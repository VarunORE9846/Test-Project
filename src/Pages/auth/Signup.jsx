import React, { useEffect } from 'react'
import { useState } from 'react';
import '../styles.css';
export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [users, setUsers] = useState([]);
  // const [error, setError] = useState(false);

  // const [formData, setFormData] = useState([{
  //   username: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: ""
  // }]);
  const [show, setShow] = useState(false);

  const handleOnChangeValues = (e) => {
    const { name, value } = e.target
    if (name === "username") {
      setUsername(value);
      setShow(false);
    }
    if (name === "email") {
      setEmail(value);
      setShow(false);

    }
    if (name === "password") {
      setPassword(value);
      setShow(false);

    }
    if (name === "confirmpassword") {
      setConfirmpassword(value);
      setShow(false);

    }

  };

  // const handleOnChangeValues = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData, [name]: value
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let re = /\S+@\S+\.\S+/;
    // console.log(formData.username.length);

    if (username.length < 5) {
      alert('invalid  username format')
      setShow(false);
      return;
    }
    // else {
    //   setShow(true);
    //   // return;
    // }

    else if (!(re.test(String(email).toLowerCase()))) {
      alert("invalid email format");
      setShow(false);
      return;
    }
    else if (users.filter(a => a.username === username).length > 0) {
      alert("user already exists");
      setShow(false);
      return;
    }
    // else {
    //   setShow(true);
    //   return;
    // }
    else if (!(password.length >= 8 && /\d/.test(password) && /[!@#$%^&*]/.test(password))) {
      alert("Invalid password format,Atleast one uppercase,lowercase Digit and special character are necessary");
      setShow(false);
      return;
    }
    // else {
    //   setShow(true);
    //   // return;
    // }
    else if (!(password === confirmpassword)) {
      alert("passwords donot match");
      setShow(false);
      return;
    }
    else {
      alert("Form submitted successfully");
      setShow(true);
      handleStorage();
    }
  };
  const handleStorage = () => {
    localStorage.setItem("SignupTable", JSON.stringify([...users, { username, email, password, confirmpassword }]));
    setUsers([...users, { username, email, password, confirmpassword }]);
    console.log("local storage is updated");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmpassword("");

  };
  useEffect(() => {
    const users = localStorage.getItem("SignupTable");
    if (users) {
      setUsers(JSON.parse(users));
    }
  }, []);

  const resetStorage = (e) => {
    e.preventDefault();
    localStorage.removeItem("SignupTable");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmpassword("");
    setUsers([]);
  };
  return (
    // <form className='form'>
    <div className='form'>
      <form onSubmit={handleSubmit} >
        <div className='title'>
          <h1>Signup</h1>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputText1">Username</label>
          <input type="text" value={username} onChange={(e) => handleOnChangeValues(e)} required name="username" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" placeholder="Enter Username" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail2">Email address</label>
          <input required onChange={(e) => handleOnChangeValues(e)} value={email} type="email" name="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input required onChange={(e) => handleOnChangeValues(e)} value={password} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Confirm-Password</label>
          <input required type="password" onChange={(e) => handleOnChangeValues(e)} value={confirmpassword} name="confirmpassword" className="form-control" id="exampleInputPassword2" placeholder="Password" />
        </div>
        {/* <div className="sign"> */}
        <div className='button'>
          <button type="submit" className="btn btn-primary">Signup</button>
        </div>
        <div className='button'>
          <button className="btn btn-primary" onClick={resetStorage}>Reset</button>
        </div>
      </form>
      {/* {show && <div className="ephs">
        <div className='EPs'>
          <h4>{username}</h4>
          <h4>{email}</h4>
          <h5> {password}</h5>
        </div>
      </div>} */}
    </div>
  )
};

