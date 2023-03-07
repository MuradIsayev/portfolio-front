import { useContext } from 'react';
import { ThemeContext } from '../../App';
import signout from '../../assets/sign-out.svg';
import darksignout from '../../assets/darksignout.svg';
import '../NavBar/navbar-cont.css';
import './GuestBook.css';

function GuestBookWithLogin() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id={theme}>
      <div className="text-input-container">
        <input
          type="text"
          className="guestbook-input"
          name="name"
          placeholder="Your message..."
        />
        <button className="guestbook-send-button">Send</button>
      </div>
      <div className="github-signout">
        <img
          className="guestbook-signout-icon"
          src={theme === 'light' ? signout : darksignout}
          style={{ width: '18px' }}
          alt="signout icon"
        />
        <button className="signout">Sign out </button>
      </div>
    </div>
  );
}

export default GuestBookWithLogin;
