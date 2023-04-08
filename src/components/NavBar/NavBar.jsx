import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import useDarkMode from '../../hooks/useDarkMode';
import { FaMoon, FaSun } from 'react-icons/fa';

function NavBar() {
  const location = useLocation();
  const isBlogPage = location.pathname.includes('/blog');
  const isGuestBookPage = location.pathname.includes('/guestbook');
  const isAboutPage = location.pathname.includes('/about');
  const isHomePage = location.pathname.includes('/home');
  const isResumePage = location.pathname.includes('/resume');

  const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode} className='cursor-pointer'>
        {darkTheme ? (
          <FaMoon size="24" className="text-gray-500" />
        ) : (
          <FaSun size="24" className="text-yellow-400" />
        )}
      </span>
    );
  };

  return (
    <nav
      className="navbar"
      style={{ backgroundColor: 'transparent' }}
    >
      <ThemeIcon />

      <Link
        to="/home"
        className={isHomePage ? 'active navbar-links' : 'navbar-links'}
      >
        <span className="navbar-texts">Home</span>
      </Link>
      <Link
        to="/about"
        className={isAboutPage ? 'active navbar-links' : 'navbar-links'}
      >
        <span className="navbar-texts">About</span>
      </Link>
      <Link
        to="/blog"
        className={isBlogPage ? 'active navbar-links' : 'navbar-links'}
      >
        <span className="navbar-texts">Blog</span>
      </Link>
      <Link
        to="/guestbook"
        className={isGuestBookPage ? 'active navbar-links' : 'navbar-links'}
      >
        <span className="navbar-texts">GuestBook</span>
      </Link>
      <Link
        to="/resume"
        className={isResumePage ? 'active navbar-links' : 'navbar-links'}
      >
        <span className="navbar-texts">Resume</span>
      </Link>
    </nav>
  );
}

export default NavBar;
