import Navbar from './components/navbar'
import About from './components/about'
import Home from './components/home'
import Upload from './components/upload';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
          <Route exact path="/home" element={<><Home /></>}></Route>
          <Route exact path="/upload" element={<><Upload /></>}></Route>
          <Route exact path="/about" element={<><About /></>}></Route>
        </Routes>
      </div> 
    </Router>
  );
}

export default App;
