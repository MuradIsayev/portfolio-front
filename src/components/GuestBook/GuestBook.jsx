import { useContext } from 'react';
import { ThemeContext } from '../../App';
import NavBar from '../NavBar/NavBar';
import '../NavBar/navbar-cont.css';
import './GuestBook.css';
import bluegithub from '../../assets/bluegithub.svg';
import darkgithub from '../../assets/darkgithub.svg';

function GuestBook() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="main-container">
      <div className="navbar-container guestbook-navbar-class-block">
        <NavBar />
      </div>
      <div
        className="guestbook-container"
        id={theme}
        style={{ backgroundColor: 'transparent' }}
      >
        <h2>GuestBook</h2>
        <div className="guestbook-content-container">
          <button className="github-button">
            <img
              className="guestbook-button-img"
              src={theme === 'dark' ? bluegithub : darkgithub}
              alt="github logo"
            />
            <span className='button-text'> 
            Sign in with GitHub
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GuestBook;
