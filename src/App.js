import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NavBar from './pages/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar>
      </NavBar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      
    </div>
  );
}

export default App;
