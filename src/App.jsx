import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import {Home} from './Pages/Home';
import {Login} from './Pages/Login';
import {Signup} from './Pages/Signup';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/'element={<Home/>} />
            <Route path='/Login'element={<Login/>} />
            <Route path='/Signup'element={<Signup/>} />
          </Routes>
        </Router>
    </div>
  );
}
export default App;
