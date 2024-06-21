/* component can have 
  1. TS 
  2. JSX 
  3. CSS (optional)
*/

import './App.css'
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NetflixPage from './pages/NetflixPage';
import UserManagerPage from './pages/UserManagerPage';
import AboutPage from './pages/AboutPage';

function App() {
  // must return JSX
  return (
    <BrowserRouter>
      <Header></Header>

      <main className="container mt-5 pt-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/netflix" element={<NetflixPage />} />
          <Route path="/user-manager" element={<UserManagerPage />} />
          <Route path="/about-us" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App
