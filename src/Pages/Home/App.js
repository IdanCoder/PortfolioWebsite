
import Navbar from "../../Components/Navbar";
import Contact from "../../Pages/Contact/Contact"
import './App.css'
import logo from '/Users/User/Desktop/Projects/portfolio-website/src/assets/Images/logo.png'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
function App() { 
  const app = (    
  <div>
    <nav>
        <a><Link to ="/" >Home</Link></a>
        <a>Projects</a>
        <div id="logo"><img src={logo} alt="Logo" /></div>
        <a >About Me </a>
        <a> <Link to = "/contact"> Contact </Link> </a>
    </nav>
  </div>); 
  return ( app
  )



  
}

export default App;
