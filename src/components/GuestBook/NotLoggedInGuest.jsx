// import { useEffect, useState } from 'react';
import { whiteGoogle, google, guestbookGithub, guestbookGithubDark } from '../../assets';
import { useThemeStore } from '../../store/useThemeDark';


const NotLoggedInGuest = ({ signInWithGitHub, signInWithGoogle }) => {
  const { isThemeDark } = useThemeStore();

  return (
    <div className="flex flex-row items-center gap-5 mb-8 md:gap-4 lg:w-[70%] w-[80%] md:w-full">
      <button className="login-with login-with-github">
        <div className='w-[22px] h-[22px] object-contain md:w-[14px] md:h-[14px]'>
          <img
            src={isThemeDark ? guestbookGithubDark : guestbookGithub}
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