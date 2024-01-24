import { Routes, Route } from 'react-router-dom';
import { NavBar, UnderConstruction } from './components';
import { NotFound } from './components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Blog, Home, About, GuestBook } from './pages';


const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className='min-h-screen bg-white dark:bg-[#09090B] dark:text-white overflow-hidden overflow-y-scroll'>
        <div className="main-container">
          <div className="navbar-container">
            <NavBar />
          </div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            {/* <Route path="blogs" element={<UnderConstruction />} /> */}
            <Route path="blogs" element={<Blog />} />
            {/* <Route path=':id' element={<Blog />} /> */}
            <Route path="guestbook" element={<GuestBook />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
