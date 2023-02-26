import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import GuestBook from './components/GuestBook';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/guestbook" element={<GuestBook />} />
      </Routes>
    </>
  );
}

export default App;
