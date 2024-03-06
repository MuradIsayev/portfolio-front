import { Routes, Route } from 'react-router-dom';
import { BlogDetails, NavBar } from './components';
import { NotFound } from './components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Blog, Home, About, GuestBook } from './pages';
import Now from './pages/Now';


const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className='bg-white dark:bg-[#09090B] md:min-h-[100vh] dark:text-white'>
        <div className="h-[100vh] md:h-full parent-container ">
          <div className="navbar-container">
            <NavBar />
          </div>
          <div className='overflow-auto content-container'>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="now" element={<Now />} />
              <Route path="blog" element={<Blog />} />
              <Route path='blog/:slug' element={<BlogDetails />} />
              <Route path="guestbook" element={<GuestBook />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
