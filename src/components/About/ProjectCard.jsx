import './About.css';
import darkgithub from '../../assets/darkgithub.svg';
import bluegithub from '../../assets/bluegithub.svg';
import { ThemeContext } from '../../App';
import { useContext } from 'react';

function ProjectAbout() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="project-container">
      <h3 className="project-header">Project 1</h3>
      <div className="desc-skill-container">
        <p className="project-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut
        </p>
        <ul class="skill-list">
          <li>Head</li>
          <li>Shoulders</li>
          <li>Knees</li>
        </ul>
      </div>
      <div className="link-container">
        <a href="#">
          <img
            className="github-img"
            src={theme === 'dark' ? bluegithub : darkgithub}
            alt="github logo"
          />
          <p className="link-text">View Source</p>
        </a>
      </div>
    </div>
  );
}

export default ProjectAbout;
