import './About.css';
import darkgithub from '../../assets/socials/darkgithub.svg';
import bluegithub from '../../assets/socials/bluegithub.svg';

const ProjectAbout = ({ name, description, url, skills, color, darkColor }) => {

  return (
    <div class="w-[44%] column">
      <div className={`card ${darkColor} ${color}`}>
        <div class="txt dark:text-white text-black">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <a href={url} target='_blank'>more</a>
        <div class="ico-card">
          <i class="fa fa-rebel"></i>
        </div>
      </div>
    </div>
  );
}

export default ProjectAbout;
