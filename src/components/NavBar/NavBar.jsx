import { Link, useLocation } from 'react-router-dom';
import useDarkMode from '../../hooks/useDarkMode';
import { FaSun } from 'react-icons/fa';
import { IoMoonSharp } from 'react-icons/io5';


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
      <span onClick={handleMode} className='cursor-pointer mb-2 md:mt-2 md:-ml-8 md:mr-2'>
        {darkTheme ? (
          <IoMoonSharp size="22" className="text-gray-400 md:w-[19px] md:h-[19px]" />
        ) : (
          <FaSun size="22" className="text-yellow-400 md:w-[19px] md:h-[19px]" />
        )}
      </span>
    );
  };

  return (
    <nav
        className="flex bg-transparent flex-col items-start md:flex-row md:items-center"
    >
      <ThemeIcon />

      <Link
        to="/home"
        className={isHomePage ? 'navbar-links active' : 'navbar-links'}
      >
        <span className="md:text-[.64rem]">Home</span>
      </Link>
      <Link
        to="/about"
        className={isAboutPage ? 'navbar-links active' : 'navbar-links'}
      >
        <span className="md:text-[.64rem]">About</span>
      </Link>
      <Link
        to="/blog"
        className={isBlogPage ? 'navbar-links active' : 'navbar-links'}
      >
        <span className="md:text-[.64rem]">Blog</span>
      </Link>
      <Link
        to="/guestbook"
        className={isGuestBookPage ? 'navbar-links active' : 'navbar-links'}
      >
        <span className="md:text-[.64rem]">GuestBook</span>
      </Link>
      <Link
        to="/resume"
        className={isResumePage ? 'navbar-links active' : 'navbar-links'}
      >
        <span className="md:text-[.64rem]">Resume</span>
      </Link>
    </nav>
  );
}

export default NavBar;
