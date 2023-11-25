import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Home = React.lazy(() => import('./pages/Home'));
const Rooms = React.lazy(() => import('./pages/Rooms'));

function App() {
  return (
    <Router>
      <Navigation />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/rooms" element={<Rooms />} />
        </Routes>
      </React.Suspense>
      <Footer />
    </Router>
  );
}

export default App;
