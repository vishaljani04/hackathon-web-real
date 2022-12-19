
import './App.css';
import Navbar from './Components/Navbar.js'
import Login from './Components/Login.js'
import Home from './Components/Home.js'
import About from './Components/About.js'
import Portals from './Components/Portals.js'
import Services from './Components/Services.js'
import Contact from './Components/Contact.js'
import Footer from './Components/Footer.js'


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Login></Login>
	  <Home></Home>
	  <Portals></Portals>
	  <Services></Services>
	  <About></About>
	  <Contact></Contact>
    <Footer></Footer>
    </div>
  );
}

export default App;
