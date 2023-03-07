import Home from './pages/Home';
import Stuff from './pages/Stuff';
import Contact from './pages/Contact';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/Stuff">Stuff</a></li>
            <li><a href="/Contact">Contact</a></li>
        </ul>
        <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Stuff" element={<Stuff />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </div>
      </div>
  );
}

export default App;
