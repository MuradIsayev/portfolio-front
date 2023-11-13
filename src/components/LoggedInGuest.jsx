import { io } from "socket.io-client";
import { z } from 'zod';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Filter from 'bad-words';

const socket = io("http://localhost:3001");
const LoggedInGuest = ({ signOut, currentUser, setIsSent, message, setMessage }) => { 
  const filter = new Filter();

  const [errorMessage, setErrorMessage] = useState('');
  const validateMessage = z.string()
    .max(75, 'Message should not be more than 75 characters')
    .min(1, 'Message field should not be empty')
    .refine((value) => !/^\s*$/.test(value), 'Message should not be empty')
    .refine((value) => !filter.isProfane(value), 'Message should not contain profanity');

  const handleSendButton = () => {
    socket.emit("message", { userName: currentUser?.displayName, message, photoURL: currentUser?.photoURL, uuid: currentUser?.uid, })
    setMessage('');
    setIsSent(false);
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
      <form onSubmit={handleSubmit} className='relative max-w-[60%] md:max-w-[90%]'>
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
              className="text-red-500 text-[.83rem] mt-1 font-[300] md:text-[.54rem] dark:text-[#ee6b6bad]">{errorMessage}</motion.div>
          )}
          <div>
            <button type='submit' className="send-button h-9 w-[68px] md:btn-xs md:w-[45px] md:text-[.55rem]"
            >Send</button>
          </div>
        </div>
      </form>
      <div>
        <button className="mt-1 opacity-80 transition ease-linear duration-100 cursor-pointer
                      hover:opacity-100 mb-8 md:mb-6 whitespace-nowrap text-[#18181B] dark:text-[#A1A1AA] 
                              text-[.8rem] md:text-[.52rem] font-[400] h-min w-min normal-case md:w-[45px] flex items-center justify-start"
          onClick={signOut}>Sign out</button>
      </div>
    </div>
  );
}

export default LoggedInGuest;
