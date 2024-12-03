import './index.css'; 
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Contact from './pages/Contact'; 
import { Routes, Route, NavLink } from "react-router-dom";


function App() {
  return (
    <div>
      <header>
        <nav className="p-4 bg-blue-700  text-white flex justify-center items-center gap-4">
          <NavLink to="/" className="hover:text-gray-300">Accueil</NavLink>
          <NavLink to="/Apropos" className="hover:text-gray-300">A propos</NavLink>
          <NavLink to="/Contact" className="hover:text-gray-300">Contact</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Contact" element={<Contact />} /> 
      </Routes>
    </div>
  );
}

export default App;
