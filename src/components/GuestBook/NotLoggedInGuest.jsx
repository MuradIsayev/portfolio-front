import { useEffect, useState } from 'react';
import { github, google, whiteGoogle, whiteGithub } from '../../assets';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { isThemeChangedStore } from '../../store/useIsThemeChanged';



const NotLoggedInGuest = ({ signInWithGitHub, signInWithGoogle }) => {
  const [getIsDarkTheme] = useLocalStorage("dark-theme");
  const isThemeChanged = isThemeChangedStore();

  const [isThemeDark, setIsThemeDark] = useState(() => getIsDarkTheme())

  useEffect(() => {
    setIsThemeDark(getIsDarkTheme())
  }, [isThemeChanged])

  return (
    <div className="flex flex-row items-center gap-5 mb-8 md:gap-4 lg:w-[70%] w-[80%] md:w-full">
      <button className="login-with login-with-github">
        <div className='w-[22px] h-[22px] object-contain md:w-[14px] md:h-[14px]'>
          <img
            src={isThemeDark ? github : whiteGithub}
            alt="github logo"
          />
        </div>
        <span className="lg:text-[.83rem] text-[.77rem] font-[500] md:text-[.5rem]" onClick={signInWithGitHub}>Sign in with GitHub</span>
      </button>
      <button className="login-with login-with-google">
        <div className='w-[22px] h-[22px] object-contain md:w-[14px] md:h-[14px]'>
          <img
            src={isThemeDark ? whiteGoogle : google}
            alt="google logo"
          />
        </div>
        <span className="lg:text-[.83rem] text-[.77rem] font-[500] md:text-[.5rem]" onClick={signInWithGoogle}>Sign in with Google</span>
      </button>
    </div>
  );
}


export default NotLoggedInGuest;