import { useEffect } from 'react';
import signout from '../../assets/signout.svg';
import { io } from "socket.io-client";
const socket = io("http://localhost:3001");

const GuestBookWithLogin = ({ signOut, currentUser, isSent, setIsSent, message, setMessage }) => {
  const handleSendButton = () => {
    socket.emit("message", { userName: currentUser?.displayName, message, photoURL: currentUser?.photoURL, uuid: currentUser?.uid, })
    setIsSent(false);
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendButton();
  };

  return currentUser && (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <div className="w-[50%]" >
            <input
              type="text"
              className="message-input"
              name="message"
              placeholder="Your message..."
              value={message}
              onChange={((e) => {
                setMessage(e.target.value)
              })}
            />
          </div>
          <div>
            <button type='submit' className="send-button">Send</button>
          </div>
        </div>
      </form>


      <div className="flex justify-start items-center gap-[7px] my-2 opacity-70
                      transition ease-linear duration-100 cursor-pointer 
                      hover:opacity-100 mb-5 w-[10%] md:w-[20%]">
        <img
          className="md:w-3 w-[18px]"
          src={signout}
          alt="signout icon"
        />
        <button className="text-[#3f3f3f] dark:text-[#c2c2c2] 
                              text-[13px] md:text-[9px] font-[600]
        " onClick={signOut}>Sign out</button>
      </div>
    </div>
  );
}

export default GuestBookWithLogin;
