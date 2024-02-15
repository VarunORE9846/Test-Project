// import Header from './Components/Header';
import './Pages/styles.css'
import Navbar from './Components/Navbar';
import { Home } from './Pages/Home';
import { Login } from './Pages/auth/Login';
import { Signup } from './Pages/auth/Signup';
import { Increement } from './Pages/Increement';
import { Crud } from './Pages/Crud';
import { Usecontext } from './Pages/Usecontext';
import { Calc } from './Pages/Calc';
import { CustomE } from './Pages/CustomE';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './Utils/PrivateRoutes';
import PublicRoutes from './Utils/PublicRoutes';
import { Profile } from './Pages/Profile';
import { Outlet } from "react-router-dom";
import { createContext, useState } from 'react';
const Appstate = createContext();
const datastate = createContext();

function App() {
  const [num, setNum] = useState(0);

  const sendNum = (num) => {
    setNum(num);
  }

  const [data, setData] = useState({ Name: "varun sharma", Typehook: "This is an implementation of Usecontext hook" });
  return (
    <div>
      <Appstate.Provider value={num}>
        <datastate.Provider value={data}>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route element={<PublicRoutes><Outlet /></PublicRoutes>}>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
              </Route>

              <Route element={<PrivateRoutes> <Outlet /> </PrivateRoutes>}>
                <Route path='/profile' element={<Profile />} />
                <Route path='/increement' element={<Increement sendNum={sendNum} />} />
                <Route path='/Crud' element={<Crud />} />
                <Route path='/Usecontext' element={<Usecontext />} />
                <Route path='/Calc' element={<Calc />} />
                <Route path='/CustomE' element={<CustomE />} />
              </Route>
            </Routes>
          </Router>
        </datastate.Provider>
      </Appstate.Provider>
    </div >
  );
}
export { Appstate };
export { datastate };
export default App;
