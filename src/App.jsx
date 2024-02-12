// import Header from './Components/Header';
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
function App() {
  const [data, setData] = useState({ Name: "varun sharma", Typehook: "This is an implementation of useContext Hook" });
  return (
    <>
      {/* <Header />
        <AppBar position='static'>
        <Toolbar> */}
      {/* <IconButton><LocalLibraryIcon/></IconButton> */}

      <Appstate.Provider value={data}>
        <Router>
          <Navbar />

          <Routes>
            <Route element={<PrivateRoutes> <Outlet /> </PrivateRoutes>}>
              <Route path='/profile' element={<Profile />} />
              <Route path='/increement' element={<Increement />} />
              <Route path='/Crud' element={<Crud />} />
              <Route path='/Usecontext' element={<Usecontext />} />
              <Route path='/Calc' element={<Calc />} />
              <Route path='/CustomE' element={<CustomE />} />
            </Route>
            <Route exact path='/' element={<Home />} />
            <Route element={<PublicRoutes><Outlet /></PublicRoutes>}>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Route>
          </Routes>
        </Router>
      </Appstate.Provider>

      {/* </Toolbar>
        </AppBar> */}
    </>
  );
}
export { Appstate };
export default App;
