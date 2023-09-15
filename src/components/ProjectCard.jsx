const ProjectCard = ({ name, description, url, skills, color, darkColor }) => {

  return (
    <div class="min-w-[42.5%] column dark:opacity-80 dark:hover:opacity-90 opacity-90 hover:opacity-100">
      <div className={`bg-[#ffffff] dark:bg-[#09090B] border border-[#E4E4E7] dark:border-[#27272A] group card ${darkColor} ${color}`}>
        <div class="txt dark:text-white text-black">
          <h1 className='project-name group-hover:text-white'>{name}</h1>
          <p className='project-desc'>{description}</p>
        </div>
        <a href={url} className='project-link' target='_blank'>more</a>
        <div class="ico-card">
          <i class="fa fa-rebel"></i>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
