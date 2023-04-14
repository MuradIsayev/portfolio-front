import signout from '../../assets/signout.svg';

function GuestBookWithLogin() {

  return (
    <div>

      <div className="flex items-center">
        <div className="w-[50%]" >
          <input
            type="text"
            className="  message-input"
            name="name"
            placeholder="Your message..."
          />
        </div>
        <div>
          <button className="send-button">Send</button>
        </div>
      </div>

      <div className="flex justify-start items-center gap-[7px] my-2 opacity-70
      transition ease-linear duration-100 cursor-pointer hover:opacity-100 mb-5 w-[10%] md:w-[20%] border">
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
