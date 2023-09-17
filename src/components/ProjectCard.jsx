const ProjectCard = ({ name, description, url, skills, color, darkColor }) => {

  return (
    <div class="min-w-[42.5%] column dark:opacity-80 dark:hover:opacity-90 opacity-90 hover:opacity-100">
      <div className={`bg-[#ffffff] hover:bg-[#f7f7f7ea] dark:bg-[#09090B] hover:dark:bg-[#111113dc] border border-[#E4E4E7] dark:border-[#27272A] group card ${darkColor} ${color}`}>
        <div class="txt dark:text-white text-black">
          <h1 className='opacity-80 project-name dark:group-hover:text-white'>{name}</h1>
          <p className='project-desc dark:text-neutral-400 text-neutral-600'>{description}</p>
        </div>
        <a href={url} className='project-link opacity-80 dark:text-neutral-400 group-hover:text-[#09090B] dark:group-hover:text-[#ffffff]' target='_blank'>more</a>
        <div class="transition duration-200 inset-x-0 inset-y-0 w-full h-full overflow-hidden absolute">
          <i class="fa fa-rebel relative right-[-50%] top-[10%] text-[12rem] leading-[0] opacity-20 text-white z-0"></i>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
