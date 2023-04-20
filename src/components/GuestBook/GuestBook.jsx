import { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import GuestBookContent from './GuestBookContent';
import GuestBookWithoutLogin from './GuestBookWithoutLogin';
import GuestBookWithLogin from './GuestbookWithLogin';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { io } from "socket.io-client";
const socket = io("http://localhost:3001");

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
  const [message, setMessage] = useState(null);
  const [data, setData] = useState([]);
  const [isSent, setIsSent] = useState(false);
  const [user] = useAuthState(auth);

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
        timeoutId = setTimeout(handleTimeout, 1200000); // 2 minutes
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
    socket.emit('getMessage');
    socket.on('userMessage', (data) => {
      setData(data);
      setIsSent(true);
    });
  }, [isSent, data]);

  const signInWithGitHub = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider).then(() => {
      console.log(`${auth?.currentUser?.email} signed in with GitHub`);
      socket.emit('initiate', { userName: auth?.currentUser?.displayName, photoURL: auth?.currentUser?.photoURL, uuid: auth?.currentUser?.uid, })
    })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSignOut = async () => {
    await auth.signOut();
  };

  return (
    <div className="main-container">
      <div className="navbar-container">
        <NavBar />
      </div>
      <div
        className="flex flex-col justify-start mt-32 
                    w-[90%] gap-3 md:mt-20 md:w-[100%]"
      >
        <h2 className='headers'>GuestBook</h2>
        <div className="guestbook-content-container">
          {auth?.currentUser ? <GuestBookWithLogin setMessage={setMessage} message={message} setIsSent={setIsSent} isSent={isSent} currentUser={auth?.currentUser} signOut={handleSignOut} /> : <GuestBookWithoutLogin signIn={signInWithGitHub} />}
          {isSent ? <GuestBookContent data={data} /> : null}
        </div>
      </div>
    </div>
  );
}

export default GuestBook;
