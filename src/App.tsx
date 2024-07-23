import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import Destination from './pages/Destination';
import Experience from './pages/Experience';
import Transportation from './pages/Transportation';
import Accomodation from './pages/Accomodation';
import ContactUs from './pages/ContactUs';

// import components
import Header from './components/Header';

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/destination" element={<Destination />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/transportation" element={<Transportation />}></Route>
            <Route path="/accomodation" element={<Accomodation />}></Route>
            <Route path="/contactUs" element={<ContactUs />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
