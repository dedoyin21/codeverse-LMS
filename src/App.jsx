import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashBoard/page'; // Adjust path as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} /> {/* Use lowercase if that's how you name the route */}
      </Routes>
    </Router>
  );
}

export default App;
