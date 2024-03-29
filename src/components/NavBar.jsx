import { Link, useLocation } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';
import { useState } from 'react';
import { useThemeStore } from '../store/useThemeDark';
import { motion } from 'framer-motion';
import navItems from '../constants/routes';
import { isMobile } from 'react-device-detect';



const NavBar = () => {
  const location = useLocation();

  let currentPath = location.pathname;

  if (currentPath === '/') {
    currentPath = '/home';
  }

  const [hoveredPath, setHoveredPath] = useState(currentPath);

  const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const { isThemeDark, setIsThemeDark } = useThemeStore();

    const handleMode = () => {
      setDarkTheme(!isThemeDark);
      setIsThemeDark(!isThemeDark);
    }

    return (
      <label className="mb-2 mr-2 md:mb-0 swap swap-rotate cursor-pointer h-10 w-10 md:h-8 md:w-8 lg:h-11 lg:w-11
      dark:hover:bg-[#151516d5] rounded-md hover:bg-[#ededeee0] md:hover:bg-transparent md:dark:hover:bg-transparent
      transition ease-linear duration-200">
        <input type="checkbox" checked={isThemeDark} onChange={handleMode} />
        <svg className="swap-off fill-current text-neutral-600 w-[27px] h-[27px] md:w-[22px] md:h-[22px] lg:w-[29px] lg:h-[29px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
        <svg className="swap-on fill-current  text-neutral-400 w-[26px] h-[26px] md:w-[22px] md:h-[22px] lg:w-[28px] lg:h-[28px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
      </label>
    )
  }

  return (
    <nav
      className="fixed flex flex-col items-start bg-transparent md:flex-row md:items-center md:sticky"
    >
      <ThemeIcon />

      {navItems.map((item, index) => {
        const isActive = item.path === currentPath;

        const handleMouseEvents = {
          onMouseOver: () => {
            if (!isMobile) {
              setHoveredPath(item.path);
            }
          },
          onMouseLeave: () => {
            if (!isMobile) {
              setHoveredPath(currentPath);
            }
          },
        };

        const handleTouchEvents = {
          onClick: () => {
            setHoveredPath(item.path);
          },
        };

        return (
          <Link
            key={item.path}
            to={item.path}
            className={`relative navbar-links ${isActive ? " text-[#000000] dark:text-[#ffffff]" : "text-neutral-600 dark:text-neutral-400"
              }`}
            data-active={isActive}
            href={item.path}
            {...(isMobile ? handleTouchEvents : handleMouseEvents)}

          >
            <span className='md:text-[.6rem]'>{item.name}</span>
            {item.path === hoveredPath && (
              <motion.div
                className="absolute bottom-0 left-0 w-full h-full rounded-md -z-10 hovered-path"
                layoutId="navbar"
                aria-hidden="true"
                transition={{
                  type: 'tween',
                  duration: .3,
                }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export default NavBar;