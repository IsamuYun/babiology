import { useState } from 'react';
import Home from './pages/Home';
import Parents from './pages/Parents';
import Surrogates from './pages/Surrogates';
import About from './pages/About';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === 'parents' && <Parents setCurrentPage={setCurrentPage} />}
      {currentPage === 'surrogates' && <Surrogates setCurrentPage={setCurrentPage} />}
      {currentPage === 'about' && <About setCurrentPage={setCurrentPage} />}
    </div>
  );
}
