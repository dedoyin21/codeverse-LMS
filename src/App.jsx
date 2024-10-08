import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ThemeContextProvider from './Context/ThemeContextProvider';
import Dashboard from "./dashboard/page";


function App() {
  

  return (
    <ThemeContextProvider>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </ThemeContextProvider>
  );
}

export default App;

