import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles.css';

export const Login = () => {

  const [userss, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [show, setShow] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const users = localStorage.getItem("SignupTable");
    if (users) {
      setUsers(JSON.parse(users));
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('clicked');
    const exist_user = userss.filter(a => a.email === email); //[{}] this matches the data from login with the sign up table data
    if (exist_user.length > 0) { // if user exists 
      if (exist_user[0].password === password) {
        const userData = {
          username: exist_user[0].username,
          email: exist_user[0].email
        };
        localStorage.setItem("LoggedInUser", JSON.stringify(userData));
        navigate('/profile');
      }
      else {
        alert("Incorrect Password");
      }
    }
    else { // if user doesnt exists 
      alert("user does not exist");
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
      {/* {show && <div className="eph">
        <div className='EP'>
          <h4>{email}</h4>
          <h5> {password}</h5>
        </div>
      </div>} */}
    </>
  )
};

