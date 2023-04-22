import bluegithub from '../../assets/bluegithub.svg';
import darkgithub from '../../assets/darkgithub.svg';
import google from '../../assets/google.svg';




const GuestBookWithoutLogin = ({ signInWithGitHub, signInWithGoogle }) => {

  return (
    <div className="flex flex-row gap-5">
      <div className=''>
        <button className="login-with-github">
          <img
            className="w-[21px] md:w-[14px]  md:h-[14px]"
            src={bluegithub}
            alt="github logo"
          />
          <span className="text-[.83rem] font-[500] md:text-[.5rem]" onClick={signInWithGitHub}>Sign in with GitHub</span>
        </button>
      </div>
      <div>
        <button className="login-with-github">
          <img
            className="w-[17px] md:w-[12px]  md:h-[12px]"
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