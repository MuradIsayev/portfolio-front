import bluegithub from '../../assets/bluegithub.svg';
import darkgithub from '../../assets/darkgithub.svg';
import './GuestBook.css';

function GuestBookWithoutLogin() {
  return (
    <button className="flex justify-center items-center p-5 gap-2  rounded-md
      cursor-pointer transition ease-linear duration-100
      bg-[#f5f5f5] text-[#4E4E4E] dark:bg-[#272727] dark:text-[#C2C2C2]
      hover:bg-[#e5e5e5] hover:text-[#0c0c0c]
      dark:hover:bg-[#333333] dark:hover-text-[#f0f0f0]
      ">
      <img
        className="guestbook-button-img"
        src={bluegithub}
        style={{ width: '20px' }}
        alt="github logo"
      />
      <span className="text-[.97rem] font-[500] ">Sign in with GitHub</span>
    </button>
  );
}


export default GuestBookWithoutLogin;