import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import GuestBookContent from './GuestBookContent';
import GuestBookWithoutLogin from './GuestBookWithoutLogin';
import GuestBookWithLogin from './GuestbookWithLogin';
import signout from '../../assets/sign-out.svg';
import './GuestBook.css';
import GithubLogin from 'react-github-login';

function GuestBook() {
  const [isLogin, setIsLogin] = useState(true);
  const handleGithubLoginFailure = err => {
    console.log('Here is the error:', err);
  };

  const handleGithubLogin = async response => {
    const { code } = response;
    const res = await fetch(
      `http://localhost:3001/api/auth/github/callback?code=${code}`
    );
    if (res.ok) {
      setIsLogin(true);
      window.location.reload();
    } else {
      handleGithubLoginFailure(res.statusText);
    }
  };

  return (
    <div className="main-container">
      <div className="navbar-container guestbook-navbar-class-block">
        <NavBar />
      </div>
      <div
        className="flex flex-col justify-start mt-32 w-[90%] gap-3 md:mt-20 md:w-[100%]"
      >
        <h2 className='headers'>GuestBook</h2>
        <GithubLogin
          clientId="fb65cc1848303972e11a"
          onSuccess={handleGithubLogin}
          onFailure={handleGithubLoginFailure}
          redirectUri="http://localhost:3001/api/auth/github/callback"
          scope="user:email"
          buttonText="Login with GitHub"
        />
        <div className="guestbook-content-container">
          {isLogin ? <GuestBookWithLogin /> : <GuestBookWithoutLogin />}
          <GuestBookContent />
          <GuestBookContent />
        </div>
      </div>
    </div>
  );
}

export default GuestBook;
