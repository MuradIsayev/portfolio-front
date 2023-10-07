
const Skills = ({ skills }) => {
  return (
    <div className='flex flex-wrap project-skills'>
      {skills.map((skill) => (
        <div className='pr-2 font-semibold skill text-neutral-600 dark:text-neutral-400'>
          <p className="text-[.72rem] md:text-[.68rem]">{skill?.name}</p>
        </div>
      ))}
    </div>
  )
}    

const ProjectCard = ({ name, description, url, skills, color, darkColor }) => {

  return (
    <div class="w-[325px] md:w-[280px] column dark:hover:opacity-90 opacity-95 dark:opacity-90 hover:opacity-100">
      <div className={` hover:bg-[#f7f7f7ea] dark:bg-[#09090B] hover:dark:bg-[#111113dc] border border-[#E4E4E7] dark:border-[#27272A] group min-h-[170px] md:min-h-[160px] card ${darkColor} ${color}`}>
        <div class="txt dark:text-[#fafafa] text-[#09090B]">
          <h1 className='project-name text-xl md:text-lg font-[300] uppercase text-neutral-600 dark:text-neutral-400 dark:group-hover:text-[#fafafa] group-hover:text-[#09090B]'>{name}</h1>
          <p className='text-[.7rem] md:text-[.65rem] project-desc text-neutral-600 dark:text-neutral-400 '>{description}</p>
          <Skills skills={skills} />
        </div>
        <div>
        <a href={url} className='project-link font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-[#09090B] dark:group-hover:text-[#fafafa] group-hover:animate-pulse' target='_blank'>more</a>
        <span className="absolute opacity-0 group-hover:bg-[#09090B] dark:group-hover:bg-[#fafafa] bottom-[1.35rem] ml-3 left-[60px] w-6 h-[1px] group-hover:opacity-100
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
