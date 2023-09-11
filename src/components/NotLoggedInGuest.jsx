import { github } from '../assets';
import { google } from '../assets';


const NotLoggedInGuest = ({ signInWithGitHub, signInWithGoogle }) => {

  return (
      <div className="flex flex-row items-center mb-8 w-min border rounded-[.35rem] border-[#18181B] dark:border-[#FAFAFA]">
        <div>
          <button className="login-with login-with-github ">
            <img
              className="w-[21px] md:w-[14px] md:h-[14px]"
              src={github}
              alt="github logo"
            />
            <span className="text-[.83rem] font-[500] md:text-[.5rem]" onClick={signInWithGitHub}>Sign in with GitHub</span>
          </button>
        </div>
        <div>
          <button className="login-with login-with-google ">
            <img
              className="w-[18px] h-[18px] md:w-[12px]  md:h-[12px]"
              src={google}
              alt="google logo"
            />
            <span className="text-[.83rem] font-[500] md:text-[.5rem]" onClick={signInWithGoogle}>Sign in with Google</span>
          </button>
        </div>
      </div>
  );
}


export default NotLoggedInGuest;