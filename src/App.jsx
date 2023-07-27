import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import GuestBook from './components/GuestBook/GuestBook';
import { Routes, Route } from 'react-router-dom';
import BlogContent from './components/Blog/BlogContent';
import BlogDetails from './components/Blog/BlogDetails';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className='h-screen bg-white dark:bg-black dark:text-white overflow-hidden overflow-y-scroll'>
        <div className="main-container ">
          <div className="navbar-container">
            <NavBar />
          </div>
          <Routes>
          <Route path="/" exact element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blogs">
              <Route index element={<Blog />} />
              <Route path=':id' element={<Blog />} />
            </Route>
            <Route path="guestbook" element={<GuestBook />} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
