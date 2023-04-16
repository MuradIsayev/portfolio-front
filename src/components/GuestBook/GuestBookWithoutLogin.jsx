import bluegithub from '../../assets/bluegithub.svg';
import darkgithub from '../../assets/darkgithub.svg';
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

function GuestBookWithoutLogin({ value, onLogin }) {
  const [user] = useAuthState(auth);
  const signInWithGitHub = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider).then(() => {
      onLogin(value);
      console.log(user);

    })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <button className="login-with-github">
      <img
        className="w-5 md:w-[14px]"
        src={bluegithub}
        alt="github logo"
      />
      <span className="text-[.83rem] font-[600] md:text-[.6rem]" onClick={signInWithGitHub}>Sign in with GitHub</span>
    </button>
  );
}


export default GuestBookWithoutLogin;