import Home from './pages/Home';
import Stuff from './pages/Stuff';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import {NavLink, Route, Routes} from "react-router-dom";

function App() {
  return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Stuff">Stuff</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
        <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Stuff" element={<Stuff />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
      </div>
  );
}

export default App;
