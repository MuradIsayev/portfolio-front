import { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import GuestBookContent from './GuestBookContent';
import GuestBookWithoutLogin from './GuestBookWithoutLogin';
import GuestBookWithLogin from './GuestbookWithLogin';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

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

function GuestBook() {
  const [message, setMessage] = useState('');
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
        timeoutId = setTimeout(handleTimeout, 120000); // 2 minutes
      } else {
        clearTimeout(timeoutId);
      }
    });

    return () => {
      unsubscribe();
      clearTimeout(timeoutId);
    };
  }, []);

  const signInWithGitHub = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider).then(() => {
      console.log('Signed in with GitHub');
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
          {auth?.currentUser ? <GuestBookWithLogin setMessage={setMessage} message={message} setIsSent={setIsSent} currentUser={auth.currentUser} signOut={handleSignOut} /> : <GuestBookWithoutLogin signIn={signInWithGitHub} />}
          {isSent ? <GuestBookContent message={message} currentUser={auth.currentUser.displayName} photoUrl={auth.currentUser.photoURL} /> : null}
        </div>
      </div>
    </div>
  );
}

export default GuestBook;
