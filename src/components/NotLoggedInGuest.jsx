import { github } from '../assets';
import { google } from '../assets';


const NotLoggedInGuest = ({ signInWithGitHub, signInWithGoogle }) => {

  return (
    <div className="flex flex-row items-center gap-6 mb-8 md:gap-4 w-min">
      <div>
        <button className="login-with login-with-github">
          <div className='w-[21px] h-[21px] object-contain md:w-[14px] md:h-[14px]'>
            <img
              src={github}
              alt="github logo"
            />
          </div>
          <span className="text-[.83rem] font-[500] md:text-[.5rem]" onClick={signInWithGitHub}>Sign in with GitHub</span>
        </button>
      </div>
      <div>
        <button className="login-with login-with-google">
          <div className='w-[17.5px] h-[17.5px] md:w-[12px] md:h-[12px]'>
            <img
              src={google}
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