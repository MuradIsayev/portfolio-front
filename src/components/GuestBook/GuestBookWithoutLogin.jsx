import bluegithub from '../../assets/socials/bluegithub.svg';
import darkgithub from '../../assets/socials/darkgithub.svg';
import google from '../../assets/socials/google.svg';




const GuestBookWithoutLogin = ({ signInWithGitHub, signInWithGoogle }) => {

  return (
    <div className="flex flex-row items-center gap-5 mb-8 md:gap-3">
      <div>
        <button className="login-with-github">
          <img
            className="w-[21px] md:w-[14px] md:h-[14px]"
            src={bluegithub}
            alt="github logo"
          />
          <span className="text-[.83rem] font-[500] md:text-[.5rem]" onClick={signInWithGitHub}>Sign in with GitHub</span>
        </button>
      </div>
      <span className="text-[.9rem] font-[400] md:text-[.5rem]">or</span>
      <div>
        <button className="login-with-github">
          <img
            className="w-[18px] h-[18px] md:w-[12px]  md:h-[12px]"
            src={google}
            alt="github logo"
          />
          <span className="text-[.83rem] font-[500] md:text-[.5rem]" onClick={signInWithGoogle}>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}


export default GuestBookWithoutLogin;