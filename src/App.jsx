import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import GuestBook from './components/GuestBook';
import { Routes, Route } from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.body.id = theme;
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/guestbook" element={<GuestBook />} />
          </Routes>
        </div>
        <ReactSwitch
            checked={theme === 'dark'}
            onChange={toggleTheme}
            onColor="#d4d0d0"
            offColor="#1f1e1e"
            checkedIcon={false}
            uncheckedIcon={false}
            height={24}
            width={48}
            handleDiameter={24}
            className="react-switch"
          />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
