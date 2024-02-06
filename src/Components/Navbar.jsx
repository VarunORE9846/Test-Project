import React, { useEffect, useState } from "react"
import { Link,useLocation } from "react-router-dom";
const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const location=useLocation();
  console.log(location.pathname);
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("LoggedInUser"));
  }, [location.pathname]);
  return (

    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="admin">Admin Panel</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              loggedInUser ?
              <>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" onClick={()=>localStorage.removeItem("LoggedInUser")}>Logout</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/increement">Counter</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Crud">CRUD</Link>
            </li>
            </>
            :
              <>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                </li>
              </>
            }

          </ul>

        </div>
      </div>
    </nav>

  )
}
export default Navbar