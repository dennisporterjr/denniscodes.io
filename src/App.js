import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
