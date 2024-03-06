import { io } from "socket.io-client";
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  RegExpMatcher,
  englishDataset,
  englishRecommendedTransformers,
} from 'obscenity'
import debounce from "lodash/debounce";

const socket = io(import.meta.env.VITE_APP_socketIO_URL);

const LoggedInGuest = ({ signOut, currentUser, setData, message, setMessage }) => {
  const matcher = new RegExpMatcher({
    ...englishDataset.build(),
    ...englishRecommendedTransformers,
  });

  const [displayTyping, setDisplayTyping] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [dotCount, setDotCount] = useState(0);
  const validateMessage = z.string()
    .max(100, 'Message should not be more than 100 characters.')
    .min(1, 'Message field should not be empty.')
    .refine((value) => !/^\s*$/.test(value), 'Message should not be empty.')
    .refine((value) => !matcher.hasMatch(value), 'Message should not contain profanity.')

  const handleSendButton = () => {
    socket.emit("sendMessage", { userName: currentUser?.displayName, message, photoURL: currentUser?.photoURL, uuid: currentUser?.uid, })
    setMessage('');
    socket.on('updatedMessages', (data) => {
      setData(data);
    })
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prevCount) => (prevCount % 3) + 1);
    }, 750);
    return () => clearInterval(interval);
  }, []);

  const typingDot = '.'.repeat(dotCount);

  const handleTyping = debounce(() => {
    setIsTyping(false);
    socket.emit('typing', { isTyping, uuid: currentUser?.uid });
  }, 1000);


  let timeout = null;
  socket.on('typing', ({ userName, nbOfUsers, allTypingUserIDs }) => {
    clearTimeout(timeout);

    const areTwoUsersTyping = nbOfUsers === 2 && allTypingUserIDs.includes(currentUser.uid);

    if (nbOfUsers === 1 || areTwoUsersTyping) {
      setDisplayTyping(`${userName} is typing`);
    } else if (nbOfUsers >= 2) {
      setDisplayTyping(`Multiple people are typing`);
    }

    // Set a timeout to clear the typing status after 2500 milliseconds
    timeout = setTimeout(() => {
      setDisplayTyping('');
    }, 2000);
  });

  useEffect(() => {
    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, []);

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
      <form onSubmit={handleSubmit} className='relative max-w-lg lg:max-w-xl md:max-w-sm'>
        <div >
          <div>
            <input
              type="text"
              autoComplete="off"
              className="message-input"
              name="message"
              placeholder="Your message..."
              value={message}
              onChange={((e) => {
                setMessage(e.target.value);
                setIsTyping(true);
                handleTyping();
              })}
            />
          </div>
          {displayTyping && (
            <motion.div
              className="text-neutral-600 text-[.83rem] mt-1 font-[300] md:text-[.54rem] dark:text-neutral-400">{displayTyping}{typingDot}</motion.div>
          )}
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
            <button type='submit' className="send-button h-9 w-[75px] md:btn-xs md:w-[47px] md:text-[.55rem]"
            >Send</button>
          </div>
        </div>
      </form>
      <div>
        <button className="mt-[6px] md:mt-1 opacity-80 transition ease-linear duration-150 cursor-pointer
                      hover:opacity-100 mb-8 md:mb-6 whitespace-nowrap text-[#09090B] dark:text-gray-300 
                              text-[.85rem] md:text-[.55rem] font-[400] h-min w-min normal-case md:w-[45px] flex items-center justify-start"
          onClick={signOut}>Sign out</button>
      </div>
    </div>
  );
}

export default LoggedInGuest;
