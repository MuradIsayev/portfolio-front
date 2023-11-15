import { useEffect, useState } from 'react';
import { github } from '../assets';
import { google } from '../assets';
import { whiteGoogle } from '../assets';
import { whiteGithub } from '../assets';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { isThemeChangedStore } from '../store/useIsThemeChanged';


const NotLoggedInGuest = ({ signInWithGitHub, signInWithGoogle }) => {
  const [getIsDarkTheme] = useLocalStorage("dark-theme");
  const isThemeChanged = isThemeChangedStore();

  const [isThemeDark, setIsThemeDark] = useState(() => getIsDarkTheme())

  useEffect(() => {
    setIsThemeDark(getIsDarkTheme())
  }, [isThemeChanged])

  return (
    <div className="flex flex-row items-center gap-6 mb-8 md:gap-4 w-min">
      <div>
        <button className="login-with login-with-github">
          <div className='w-[22px] h-[22px] object-contain md:w-[14px] md:h-[14px]'>
            <img
              src={isThemeDark ? github : whiteGithub}
              alt="github logo"
            />
          </div>
          <span className="text-[.83rem] font-[500] md:text-[.5rem]" onClick={signInWithGitHub}>Sign in with GitHub</span>
        </button>
      </div>
      <div>
        <button className="login-with login-with-google">
          <div className='w-[22px] h-[22px] object-contain md:w-[14px] md:h-[14px]'>
            <img
              src={isThemeDark ? whiteGoogle : google}
              alt="google logo"
            />
          </div>
          <span className="text-[.83rem] font-[500] md:text-[.5rem]" onClick={signInWithGoogle}>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}


export default NotLoggedInGuest;