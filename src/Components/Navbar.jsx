import React, { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../Pages/styles.css'
// import { Appstate } from "../App";
const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [isauth, setIsauth] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // const County = useContext(Appstate);
  useEffect(() => {
    const user = localStorage.getItem("LoggedInUser")
    if (user) {
      setLoggedInUser(JSON.parse(user))
      setIsauth(true);
    }
  }, [location.pathname]);

  const Logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("LoggedInUser");
    setIsauth(false);
    navigate('/');
  }
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
              loggedInUser && isauth ?
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/" onClick={Logout}>Logout</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/profile">Profile</Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/increement">Counter</Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Crud">CRUD</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Usecontext">Usecontext</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Calc">CalCustom</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/CustomE">Employee Data</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Movies">Movies List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Redux">Redux</Link>
                  </li>
                  {/* <li><h4 id="redd">{County}</h4></li> */}
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