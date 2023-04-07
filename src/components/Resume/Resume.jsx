import { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import { ThemeContext } from "../../App";

function Resume() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="main-container">
      <div className="navbar-container navbar-class-block">
        <NavBar />
      </div>
      <div
        className="blogs-container"
        id={theme}
        style={{ backgroundColor: 'transparent' }}
      >
        <div>
          <h2>My Resume</h2>
        </div>
      </div>
    </div>
  );
}

export default Resume;
