import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import GuestBookContent from './GuestBookContent';
import GuestBookWithoutLogin from './GuestBookWithoutLogin';
import GuestBookWithLogin from './GuestbookWithLogin';

function GuestBook() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="main-container">
      <div className="navbar-container guestbook-navbar-class-block">
        <NavBar />
      </div>
      <div
        className="flex flex-col justify-start mt-32 
                    w-[90%] gap-3 md:mt-20 md:w-[100%]"
      >
        <h2 className='headers'>GuestBook</h2>
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
