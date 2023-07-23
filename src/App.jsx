import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import GuestBook from './components/GuestBook/GuestBook';
import { Routes, Route } from 'react-router-dom';
import BlogContent from './components/Blog/BlogContent';
import BlogDetails from './components/Blog/BlogDetails';
import NavBar from './components/NavBar/NavBar';


const App = () => {
  return (
    <>
      <div className='h-screen bg-white dark:bg-black dark:text-white overflow-hidden overflow-y-scroll'>
        <div className="main-container ">
          <div className="navbar-container">
            <NavBar />
          </div>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blogs">
              <Route index element={<Blog />} />
              <Route path=':id' element={<BlogDetails />} />
            </Route>
            <Route path="guestbook" element={<GuestBook />} />
            {/* <Route path="*" component={NotFoundPage} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
