import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import GuestBook from './components/GuestBook/GuestBook';
import { Routes, Route } from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import ReactSwitch from 'react-switch';
import Resume from './components/Resume/Resume';
import { FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from './hooks/useDarkMode';

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  );
};

function App() {
  return (
    <>
        <div className="App">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/guestbook" element={<GuestBook />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <ThemeIcon />
        </div>
    </>
  );
}

export default App;
