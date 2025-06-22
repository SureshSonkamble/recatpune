import Footer from "./Footer";
import About from "./page/About"
import Api from "./page/Api";
import Blog from "./page/Blog";
import Contact from "./page/Contact"
import Home from "./page/Home"
import Login from "./page/Login";
import Navbr from "./page/Navbr"
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate , useLocation } from 'react-router-dom';


// ProtectedRoute component
function ProtectedRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/" replace />;
}
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // login state
  return (
    <>
        
    <Router>
      <Navbr /> {/* Always render Navbar component */}
      {/* <Routes>
       <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/emp" element={<Api />} />
      </Routes> */}

        <Routes>
      <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        
        {/* 🔐 Protected Routes */}
       <Route path="/home" element={  <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home />   </ProtectedRoute> } />   
      <Route path="/about" element={  <ProtectedRoute isLoggedIn={isLoggedIn}>
              <About />   </ProtectedRoute> } />
       <Route path="/contact" element={  <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Contact/>   </ProtectedRoute> } />
       <Route path="/blog" element={  <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Blog />   </ProtectedRoute> } />
       <Route path="/emp" element={  <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Api />   </ProtectedRoute> } />
                              
      </Routes>
      <Footer/>
    </Router>




    </>
  )
}

export default App
