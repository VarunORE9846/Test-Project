import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='Navbar'> 
          <div className="llc"><Link to="/">Home</Link></div>
          <div className="llc"><Link to="/Login">Login</Link></div>
          <div className="llc"><Link to="/Signup">Signup</Link></div>
       
    </div>
  )
}

export default Navbar