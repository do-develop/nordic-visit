import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';

// import components
import Header from './components/Header';

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
