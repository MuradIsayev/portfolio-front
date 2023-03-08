import { useContext } from 'react';
import { ThemeContext } from '../../App';
import NavBar from '../NavBar/NavBar';
import GuestBookContent from './GuestBookContent';
import GuestBookWithoutLogin from './GuestBookWithoutLogin';
import GuestBookWithLogin from './GuestbookWithLogin';
import signout from '../../assets/sign-out.svg';
import '../NavBar/navbar-cont.css';
import './GuestBook.css';

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
          <GuestBookWithoutLogin />
          <GuestBookContent />
          <GuestBookContent />
        </div>
      </div>
    </div>
  );
}

export default GuestBook;
