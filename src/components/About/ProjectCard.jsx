import './About.css';
import darkgithub from '../../assets/darkgithub.svg';
import bluegithub from '../../assets/bluegithub.svg';
import { ThemeContext } from '../../App';
import { useContext } from 'react';

function ProjectAbout({ name, description, url, skills }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="project-container">
      <h3 className="project-header">{name}</h3>
      <div className="desc-skill-container">
        <p className="project-text">{description}</p>
        <ul class="skill-list">
          {skills.map(skill => (
            <li className="skill-item">{skill.name}</li>
          ))}
        </ul>
      </div>
      <div className="link-container">
        <a href={url}>
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
