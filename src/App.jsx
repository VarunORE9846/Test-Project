// import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { Home } from './Pages/Home';
import { Login } from './Pages/auth/Login';
import { Signup } from './Pages/auth/Signup';
import { Increement } from './Pages/Increement';
import   Crud   from './Pages/Crud';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './Utils/PrivateRoutes';
import PublicRoutes from './Utils/PublicRoutes';
import { Profile } from './Pages/Profile';
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Header />
        <AppBar position='static'>
        <Toolbar> */}
      {/* <IconButton><LocalLibraryIcon/></IconButton> */}
      <Router>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route element={ <PrivateRoutes> <Outlet /> </PrivateRoutes>}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/increement' element={<Increement />} />
            <Route path='/Crud' element={<Crud />} />
          </Route>

          <Route element={<PublicRoutes><Outlet /></PublicRoutes>}>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Route>
        </Routes>
      </Router>
      {/* </Toolbar>
        </AppBar> */}
    </>
  );
}
export default App;
