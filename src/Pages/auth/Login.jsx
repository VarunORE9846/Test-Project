import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles.css';

export const Login = () => {

  // const [cred, setCred] = useState({  //DUMMIEE DATA
  //   Email: "varun@gmail.com",
  //   Password: "Welcome@123"
  // })   
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const users = localStorage.getItem("SignupTable");
    if (users) {
      setUsers(JSON.parse(users));
    }
  }, []);

  // const handleOnChangeValues = (e) => {
  //   const { name, value } = e.target
  //   if (name === 'email') {
  //     setEmail(value)
  //   }
  //   if  (name === "password") {
  //     setPassword(value)
  //   }
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(email, password);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    const exist_user = users.filter(a => a.email === email); //[{}] this matches the data from login with the sign up table data
    if (exist_user.length > 0) { // if user exists 
      if (exist_user[0].password === password) {
        localStorage.setItem("LoggedInUser",JSON.stringify(exist_user[0].username));
        navigate('/profile');
      }
      else {
        alert("Incorrect Password");
      }
    }
    else { // if user doesnt exists 
      alert("user does not exist");
    }
    // if (email === cred.Email && password === cred.Password) {
    //   alert("Form submitted successfully");
    //   setShow(true);
    //   return;
    // } else {
    //   console.log('here');
    //   alert("credentials don't match");
    //   setShow(false)
    //   return;
    // }
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
              aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" name='password' required className="form-control"
              onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" />
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

