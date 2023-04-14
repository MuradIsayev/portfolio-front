import bluegithub from '../../assets/bluegithub.svg';
import darkgithub from '../../assets/darkgithub.svg';

function GuestBookWithoutLogin() {
  return (
    <button className="login-with-github">
      <img
        className="guestbook-button-img"
        src={bluegithub}
        style={{ width: '20px' }}
        alt="github logo"
      />
      <span className="text-[.93rem] font-[500] ">Sign in with GitHub</span>
    </button>
  );
}


export default GuestBookWithoutLogin;