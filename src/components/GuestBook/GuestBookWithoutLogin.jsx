import bluegithub from '../../assets/bluegithub.svg';
import darkgithub from '../../assets/darkgithub.svg';

function GuestBookWithoutLogin() {
  return (
    <button className="login-with-github">
      <img
        className="w-5 md:w-[14px]"
        src={bluegithub}
        alt="github logo"
      />
      <span className="text-[.93rem] font-[500] md:text-[.65rem]">Sign in with GitHub</span>
    </button>
  );
}


export default GuestBookWithoutLogin;