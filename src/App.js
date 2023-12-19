import './App.css';
import Apple from './pages1/Apple';

// pages1
import Brand from './pages1/Brand';

// pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Blog from "./pages/Blog";
// import NavBar from './pages/NavBar';

import { Route, Routes } from 'react-router-dom';
import Nokia from './pages1/Nokia';
import Samsung  from './pages1/Samsung';


function App() {
  return (
    <div>
      <Routes>
        <Route  path="/brand"  element={ <Brand />} >
          <Route  path=""  element={ <Apple />} /> 
          <Route  path="nokia"  element={ <Nokia />} />
          <Route  path="samsung"  element={ <Samsung />} />
        </Route>
      </Routes>
       
    </div>
  );
}

export default App;

// basic 1
{/* <NavBar>
      </NavBar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
        </Routes> */}

{/* <Route path='/brand' element={<Brand />} />
        <Route path='/brand/apple' element={<Apple />} />
        <Route path='/brand/samsung' element={<Samsung />} />
        <Route path='/brand/nokia' element={<Nokia />} /> */}
