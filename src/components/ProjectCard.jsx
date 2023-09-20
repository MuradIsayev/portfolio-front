
const Skills = ({ skills }) => {
  return (
    <div className='flex flex-wrap project-skills'>
      {skills.map((skill) => (
        <div className='skill pr-2'>
          <p>{skill?.name}</p>
        </div>
      ))}
    </div>
  )
}



const ProjectCard = ({ name, description, url, skills, color, darkColor }) => {

  return (
    <div class="w-[325px] md:w-[280px] column dark:opacity-80 dark:hover:opacity-90 opacity-90 hover:opacity-100 ">
      <div className={` hover:bg-[#f7f7f7ea] dark:bg-[#09090B] hover:dark:bg-[#111113dc] border border-[#E4E4E7] dark:border-[#27272A] group card ${darkColor} ${color}`}>
        <div class="txt dark:text-white text-black">
          <h1 className='opacity-80 project-name dark:group-hover:text-white'>{name}</h1>
          <p className='project-desc dark:text-neutral-400 text-neutral-600'>{description}</p>
          <Skills skills={skills} />
        </div>
        <div>
        <a href={url} className='project-link opacity-80 dark:text-neutral-400 group-hover:text-[#09090B] dark:group-hover:text-[#ffffff]' target='_blank'>more</a>
        <span className="absolute opacity-0 dark:bg-neutral-400 group-hover:bg-[#09090B] dark:group-hover:bg-[#ffffff] bottom-[1.3rem] ml-2 left-16 w-6 h-[1px] group-hover:opacity-80
        transition ease-linear duration-150"></span>
        </div>
        <div class="transition duration-200 inset-x-0 inset-y-0 w-full h-full overflow-hidden absolute">
          <i class="fa fa-rebel relative right-[-50%] top-[10%] text-[12rem] leading-[0] opacity-20 text-white z-0"></i>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
