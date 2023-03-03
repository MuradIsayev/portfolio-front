import { useContext } from 'react';
import { ThemeContext } from '../../App';
import NavBar from '../NavBar/NavBar';
import '../NavBar/navbar-cont.css';
import './GuestBook.css';

function GuestBook() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="main-container">
      <div className="navbar-container guestbook-navbar-class-block">
        <NavBar />
      </div>
      <div className="guestbook-container" id={theme}
      style={{backgroundColor:'transparent'}}>
        <h2>GuestBook</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut
          itaque asperiores vitae deleniti praesentium odio perferendis, fuga
          sapiente quidem sed delectus facere minima repudiandae?
        </p>
      </div>
    </div>
  );
}

export default GuestBook;
