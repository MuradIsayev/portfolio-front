import { useEffect, useState } from 'react';
import { uniqueNamesGenerator, adjectives, animals } from "unique-names-generator";
import { GuestBookContent, NotLoggedInGuest, LoggedInGuest } from '../components';
import { useLocalStorage } from '../hooks/useLocalStorage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { io } from "socket.io-client";
import { motion } from 'framer-motion';
import { useAppVisible } from '../hooks/useAppVisible';
import { container, items } from '../assets/animations/transitions';

const socket = io(import.meta.env.VITE_APP_socketIO_URL);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const GuestBook = () => {
  const username = uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    length: 2,
    separator: '-',
  });

  const isVisible = useAppVisible();

  const [getInputForm, setInputForm] = useLocalStorage("inputForm");
  const [getIsSignedOut, setIsSignedOutFromStorage] = useLocalStorage("isSignedOut");

  const initialMessage = '';
  const initialSignOutState = true;
  const [message, setMessage] = useState(getInputForm() || initialMessage);
  const [data, setData] = useState([]);
  const [isSignedOut, setIsSignedOut] = useState(getIsSignedOut() ?? initialSignOutState);
  const [user] = useAuthState(auth);

  useEffect(() => {
    setInputForm(message)
  }, [setInputForm, message])

  useEffect(() => {
    setIsSignedOutFromStorage(isSignedOut)
  }, [isSignedOut])

  useEffect(() => {
    let timeoutId;

    const handleTimeout = () => {
      clearTimeout(timeoutId);
      handleSignOut();
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(handleTimeout, 600000); // 10 minutes 
      } else {
        clearTimeout(timeoutId);
      }
    });

    return () => {
      unsubscribe();
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    socket.emit('getAllMessages');
    socket.on('allMessages', (data) => {
      setData(data);
    });
  }, [isSignedOut, user]);

  const signInWithGitHub = async () => {
    const provider = new firebase.auth.GithubAuthProvider()

    await signIn(provider);

    socket.on('getAllMessages', (data) => {
      setData(data);
    });

    setIsSignedOut(false);
    setIsSignedOutFromStorage(false);
  };

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    await signIn(provider);

    socket.on('getAllMessages', (data) => {
      setData(data);
    });

    setIsSignedOut(false);
    setIsSignedOutFromStorage(false);
  };

  const signIn = async (provider) => {
    await auth.signInWithPopup(provider).then((result) => {
      const user = result.user;

      if (user) {
        socket.emit('initiate', {
          userName: user?.displayName ? user?.displayName : username,
          photoURL: user?.photoURL,
          uuid: user?.uid,
          isOnline: true,
        });
      }

    }).catch((error) => {
      console.error(error);
    });
  }



  const handleSignOut = async () => {
    socket.emit('signout', { userName: auth?.currentUser?.displayName ? auth.currentUser.displayName : username, photoURL: auth?.currentUser?.photoURL, uuid: auth?.currentUser?.uid, })
    setMessage('');
    setIsSignedOut(true);
    setIsSignedOutFromStorage(true);
    await auth.signOut();
  };

  // TODO: Enable this for production
  // useEffect(() => {
  //   if (!isSignedOut && !isVisible) {
  //     handleSignOut();
  //   }
  // }, [isVisible])

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.h2 variants={items} className='mb-2 headers'>Leave your sign</motion.h2>
      <motion.div variants={items} className="guestbook-content-container">
        {auth?.currentUser ? <LoggedInGuest setMessage={setMessage} message={message} setData={setData} currentUser={auth?.currentUser} signOut={handleSignOut} /> : <NotLoggedInGuest signInWithGoogle={signInWithGoogle} signInWithGitHub={signInWithGitHub} />}
        {data ? <GuestBookContent data={data} /> : null}
      </motion.div>
    </motion.div>
  );
}

export default GuestBook;
