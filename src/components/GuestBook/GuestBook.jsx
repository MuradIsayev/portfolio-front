import { useEffect, useState } from 'react';
import { uniqueNamesGenerator, adjectives, animals } from "unique-names-generator";
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
  const username = uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    length: 2,
    separator: '-',
  });
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);
  const [isSent, setIsSent] = useState(false);
  const [isSignedOut, setIsSignedOut] = useState(true);
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
  }, [isSent, isSignedOut]);

  const signInWithGitHub = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider).then(() => {
      console.log(`${auth?.currentUser?.email} signed in with GitHub`);
      socket.emit('initiate', { userName: auth?.currentUser.displayName ? auth.currentUser.displayName : username, photoURL: auth?.currentUser?.photoURL, uuid: auth?.currentUser?.uid, });
      setIsSignedOut(false);
    })
      .catch(error => {
        console.log(error);
      });
  };

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(() => {
      console.log(`${auth?.currentUser?.email} signed in with Google`);
      socket.emit('initiate', { userName: auth?.currentUser.displayName ? auth.currentUser.displayName : username, photoURL: auth?.currentUser?.photoURL, uuid: auth?.currentUser?.uid, })
      setIsSignedOut(false);
    })
      .catch(error => {
        console.log(error);
      });
  }; ``


  const handleSignOut = async () => {
    socket.emit('signout', { userName: auth?.currentUser.displayName ? auth.currentUser.displayName : username, photoURL: auth?.currentUser?.photoURL, uuid: auth?.currentUser?.uid, })
    setIsSignedOut(true);
    await auth.signOut();
  };

  return (
    <>
      <div
        className="mt-[7.3rem] w-[90%] md:mt-20 md:w-[100%]"
      >
        <h2 className='headers mb-2'>GuestBook</h2>
        <div className="guestbook-content-container">
          {auth?.currentUser ? <GuestBookWithLogin setMessage={setMessage} message={message} setIsSent={setIsSent} currentUser={auth?.currentUser} signOut={handleSignOut} /> : <GuestBookWithoutLogin signInWithGoogle={signInWithGoogle} signInWithGitHub={signInWithGitHub} />}
          {isSent ? <GuestBookContent data={data} /> : null}
        </div>
      </div>
    </>
  );
}

export default GuestBook;
