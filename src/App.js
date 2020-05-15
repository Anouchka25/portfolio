import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import profile from './profile.jpg';
import './App.css';

import About from './components/about/About';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';

function App() {

  const Nav =()=>{
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
      <span className="d-block d-lg-none">ANOUCHKA MINKOUE OBAME</span>
      <span className="d-none d-lg-block">
        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="" />
      </span>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/" className="nav-link js-scroll-trigger">About</Link>
        </li>
        <li className="nav-item">
        <Link to="/experience" className="nav-link js-scroll-trigger">Expériences</Link>
        </li>
        <li className="nav-item">
        <Link to="/education" className="nav-link js-scroll-trigger">Education</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
  }
  return (

    <div>
    <BrowserRouter>
<Nav />

  <div className="container-fluid p-0">
{/*   <About />
  <Experience />
  <Education /> */}
  <Route path="/" component={About} exact={true}/>
  <Route path="/experience" component={Experience} />
  <Route path="/education" component={Education} />
 

  </div>
  </BrowserRouter>
</div>
  )
}

export default App;
