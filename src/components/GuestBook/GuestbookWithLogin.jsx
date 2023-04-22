import signout from '../../assets/signout.svg';
import { io } from "socket.io-client";
import { z } from 'zod';
import { useState } from 'react';
import { motion } from 'framer-motion';

const socket = io("http://localhost:3001");
const GuestBookWithLogin = ({ signOut, currentUser, setIsSent, message, setMessage }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const validateMessage = z.string()
    .max(100, 'Message should not be more than 100 characters')
    .min(1, 'Message field should not be empty')
    .refine((value) => !/^\s*$/.test(value), 'Message should not be empty');

  const handleSendButton = () => {
    socket.emit("message", { userName: currentUser?.displayName, message, photoURL: currentUser?.photoURL, uuid: currentUser?.uid, })
    setIsSent(false);
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedMessage = validateMessage.safeParse(message);
    if (parsedMessage.success) {
      handleSendButton();
      setErrorMessage('');
    } else {
      const error = parsedMessage.error;
      let newErrors = '';
      error.errors.forEach((err) => {
        newErrors = err.message;
      }
      );
      setErrorMessage(newErrors);
    }
  };

  return currentUser && (
    <div>
      <form onSubmit={handleSubmit} className='relative max-w-[60%] md:max-w-full'>
        <div >
          <div>
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
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                { duration: .2 }
              }
              className="text-red-500 text-[.8rem] mt-1 font-[300] md:text-[.53rem] dark:text-[#ee6b6bad]">{errorMessage}</motion.div>
          )}
          <div>
            <button type='submit' className="send-button btn btn-outline btn-sm	h-9 w-[68px] 
                                             normal-case md:btn-xs md:w-[45px] md:text-[.55rem]"
            >Send</button>
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
