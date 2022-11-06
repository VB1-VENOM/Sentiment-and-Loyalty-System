import logo from './logo.svg';
import { BrowserRouter as Router, Routes, 
  Route, Navigate,} from "react-router-dom";
import './App.css';
import Sentiment from "./Sentiment"; 
import Loyalty from "./Loyalty"; 
import Home from "./home"; 
function App() {
  return (
    <>
    {/* This is the alias of BrowserRouter i.e. Router */}
    <Router>
      <Routes>
        {/* This route is for home component 
        with exact path "/", in component props 
        we passes the imported component*/}
        <Route exact path="/home" element={<Home/>} />
          
        {/* This route is for about component 
        with exact path "/about", in component 
        props we passes the imported component*/}
        <Route path="/sentiment" element={<Sentiment/>} />
        <Route path="/loyalty" element={<Loyalty/>} />
          
        
          
        {/* If any route mismatches the upper 
        route endpoints then, redirect triggers 
        and redirects app to home component with to="/" */}
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
