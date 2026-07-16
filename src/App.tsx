import { useEffect, useState } from 'react';
import Home from './pages/Home';
import GlobePage from './pages/LiveGlobe';
import BlogPage from './pages/BlogPage';
import ModeToggle from './components/ModeToggle';

export default function App() {
  const [route, setRoute] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  let page;
  if (route === '#/globe') page = <GlobePage />;
  else if (route === '#/blog') page = <BlogPage />;
  else page = <Home />;
  return (
    <>
    <ModeToggle />
    {page}
    </>
  );
}