import signout from '../../assets/signout.svg';

function GuestBookWithLogin() {

  return (
    <div>
      <div className="relative">
        <input
          type="text"
          className="message-input"
          name="name"
          placeholder="Your message..."
        />
        <button className="send-button">Send</button>
      </div>
      <div className="flex justify-start items-center gap-[7px] my-2 opacity-70
      transition ease-linear duration-100 cursor-pointer hover:opacity-100 mb-5">
        <img
          className="md:w-3 w-[18px]"
          src={signout}
          alt="signout icon"
        />
        <button className="text-[#3f3f3f] dark:text-[#c2c2c2] text-[13px] md:text-[9px] font-[600]
        ">Sign out</button>
      </div>
    </div>
  );
}

export default GuestBookWithLogin;
