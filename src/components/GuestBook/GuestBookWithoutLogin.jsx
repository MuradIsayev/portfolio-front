import { useContext } from 'react';
import { ThemeContext } from '../../App';
import bluegithub from '../../assets/bluegithub.svg';
import darkgithub from '../../assets/darkgithub.svg';
import './GuestBook.css';

function GuestBookWithoutLogin() {
  const { theme } = useContext(ThemeContext);
  return (
    <button className="github-button">
      <img
        className="guestbook-button-img"
        src={theme === 'dark' ? bluegithub : darkgithub}
        style={{width:'20px'}}
        alt="github logo"
      />
      <span className="button-text">Sign in with GitHub</span>
    </button>
  );
}


export default GuestBookWithoutLogin;