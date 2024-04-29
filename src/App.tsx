import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/styles/common.style.css'


const HomePage = lazy(() => import('./pages/home'));
const Portfolio = lazy(() => import('./pages/portfolio'));

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
