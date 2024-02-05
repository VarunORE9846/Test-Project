// import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { Home } from './Pages/Home';
import { Login } from './Pages/auth/Login';
import { Signup } from './Pages/auth/Signup';  
import { Increement} from './Pages/Increement';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Profile } from './Pages/Profile';

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
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/increement' element={<Increement />} />
        </Routes>
      </Router>
      {/* </Toolbar>
        </AppBar> */}
    </>
  );
}
export default App;
