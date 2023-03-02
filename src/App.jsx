import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import GuestBook from './components/GuestBook/GuestBook';
import { Routes, Route } from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import ReactSwitch from 'react-switch';
import {BsFillSunFill} from 'react-icons/bs '
import { BsFillMoonFill } from 'react-icons/bs'

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

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
          <ReactSwitch
            checked={theme === 'dark'}
            onChange={toggleTheme}
            onColor="#878E88"
            offColor="#1f1e1e"
            checkedIcon={<BsFillSunFill style={{color:'#eff31b', marginTop:'3.5px', marginLeft:'6.1px', width:'13px'}}/>}
            uncheckedIcon={<BsFillMoonFill style={{color:'#cfcfcf', marginTop:'3.7px', marginLeft:'6px', width:'12px'}} />}
            height={24}
            width={48}
            handleDiameter={24}
            className="react-switch"
          />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
