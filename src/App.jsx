import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import GuestBook from './components/GuestBook/GuestBook';
import { Routes, Route } from 'react-router-dom';
import Resume from './components/Resume/Resume';


const App = () => {
  return (
    <>
      <div className='h-screen bg-white dark:bg-black dark:text-white overflow-hidden overflow-y-scroll'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/guestbook" element={<GuestBook />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
