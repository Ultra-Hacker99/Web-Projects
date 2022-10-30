import './App.css';
import React from "react";

import Navbar from './components/Navabar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/service';
import Portfolio from './components/portfolio';

import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Image from './components/Image';
//// component function name 1st letter is always capital
// function Welcome() {
//   return <h5>Welcome back Vrushabh</h5>
// }

// function App() {
//   return (
//     <div className="App">
//       < Navbar />
//       < Hero />
//       < About />
//       {/* < Welcome/> */}


//     </div>
//   );
// }

// flat arrow function 
const App = () => {
  return (
    <div className="App">
      < Navbar />
      < Hero />
      < About />
      < Service />
      < Portfolio />
      < Pricing />
      < Contact />
      < Image />
      {/* < Welcome/> */}


    </div>
  );
}

export default App;
