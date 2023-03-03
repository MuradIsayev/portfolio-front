import '../NavBar/navbar-cont.css';
import NavBar from '../NavBar/NavBar';
import './About.css';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="main-container">
      <div className="navbar-container about-navbar-class-block">
        <NavBar />
      </div>
      <div className="about-container" id={theme}
      style={{backgroundColor:'transparent'}}>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut
          itaque asperiores vitae deleniti praesentium odio perferendis, fuga
          sapiente quidem sed delectus facere minima repudiandae?
        </p>
      </div>
    </div>
  );
}

export default About;
