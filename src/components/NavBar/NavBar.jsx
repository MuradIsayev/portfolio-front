import { Link, useLocation } from 'react-router-dom';
import useDarkMode from '../../hooks/useDarkMode';
import { FaSun } from 'react-icons/fa';
import { IoMoonSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';


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
      <motion.span onClick={handleMode} className='cursor-pointer mb-2 md:mt-2 md:-ml-8 md:mr-2' initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        whileHover={{ rotate: 360, transition: { ease: 'backInOut', duration: 1, repeat: Infinity } }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}>
        {darkTheme ? (
          <motion.div
          // TODO decide which I animation I like better
          // animate={{ rotate: 360 }}
          // transition={{
          //   duration: 2,
          //   repeat: Infinity,
          //   delay: 1,
          //   repeatDelay: 1,
          // }}
            whileHover={{ rotate: 360, transition: { ease: 'backInOut', duration: .9, repeat: Infinity } }}
          >
            <IoMoonSharp size="22" className="text-gray-400 md:w-[19px] md:h-[19px]" /></motion.div>
        ) : (
          <motion.div
          // TODO decide which I animation I like better
          // animate={{ rotate: 360 }}
          // transition={{
          //   duration: 2,
          //   repeat: Infinity,
          //   delay: 1,
          //   repeatDelay: 1,
          // }}
            whileHover={{ rotate: 360, transition: { ease: 'backInOut', duration: 1.3, repeat: Infinity } }}
          >
            <FaSun size="22" className="text-yellow-400 md:w-[19px] md:h-[19px] " /></motion.div>
        )}
      </motion.span>
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
