import { Routes, Route, Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import Home from './pages/Home';
import Blog from './pages/Blog';
import BachWeekend from "./pages/BachWeekend";
import SpringBreak from "./pages/SpringBreak";
import { BrowserRouter } from "react-router-dom";
import './App.scss';

function App() {
  return (
    
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="nav-logo">MyPortfolio</Link>

        {/* desktop/pc nav bar */}
        <div className="nav-links">
          {/* <Link to="/#about">About</Link> */}
          <HashLink smooth to="/#about">About</HashLink>
          {/* <Link to="/#projects">Projects</Link> */}
          <HashLink smooth to="/#projects">Projects</HashLink>
          <HashLink smooth to="/#skills">Skills</HashLink>
          {/* <Link to="/#contact">Contact</Link> */}
          <HashLink smooth to="/#contact">Contact</HashLink>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/BachWeekend" element={<BachWeekend />} />
        <Route path="/SpringBreak" element={<SpringBreak />} />
      </Routes>
    </div>
  );
}

export default App;