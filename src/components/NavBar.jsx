import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import { ThemeContext } from '../App';
import { useContext } from 'react';

function NavBar() {
  const location = useLocation();
  const isBlogPage = location.pathname.includes('/blog');
  const isGuestBookPage = location.pathname.includes('/guestbook');
  const isAboutPage = location.pathname.includes('/about');
  const isHomePage = location.pathname.includes('/home');
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container">
      <nav
        className="navbar"
        id={theme}
        style={{ backgroundColor: 'transparent' }}
      >
        <Link to="/home" className={isHomePage ? 'active' : ''}>
          <span className="navbar-texts">Home</span>
        </Link>
        <Link to="/about" className={isAboutPage ? 'active' : ''}>
          <span className="navbar-texts">About</span>
        </Link>
        <Link to="/blog" className={isBlogPage ? 'active' : ''}>
          <span className="navbar-texts">Blog</span>
        </Link>
        <Link to="/guestbook" className={isGuestBookPage ? 'active' : ''}>
          <span className="navbar-texts">GuestBook</span>
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
