import './About.css';
import darkgithub from '../../assets/socials/darkgithub.svg';
import bluegithub from '../../assets/socials/bluegithub.svg';
import { motion } from 'framer-motion';

const ProjectAbout = ({ name, description, url, skills, testValue }) => {

  return (
    <motion.div
      className="project-container"
      initial={{
        opacity: 0,
        translateX: testValue % 2 === 0 ? -50 : 50,
        translateY: -50,
      }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.2, delay: testValue * 0.1 }}
    >
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
            src={bluegithub}
            alt="github logo"
          />
          <p className="link-text">View Source</p>
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectAbout;
