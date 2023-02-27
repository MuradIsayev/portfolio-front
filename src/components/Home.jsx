import NavBar from './NavBar';
import './navbar-cont.css';

function Home() {
  return (
    <div className="navbar-container">
      <NavBar />
      <div className="content-container">
        <h2>Filankəs</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
          asperiores
        </p>
        <div className="center-content">
          <img src="avatar-portf.png" alt="portfolio avatar" />
          <div className="socials-container">
            <div className="logo"></div>
            <div className="logo"></div>
            <div className="logo"></div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut
          itaque asperiores vitae deleniti praesentium odio perferendis, fuga
          sapiente quidem sed delectus facere minima repudiandae?
        </p>
      </div>
    </div>
  );
}

export default Home;
