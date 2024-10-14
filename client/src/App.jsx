import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Home from './pages/home'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ProtectedRoute from './ProtectedRoute'
import CalendarPage from './pages/Calendar'


function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />    
          <Route path="/calendar" element={<CalendarPage />} />   
        </Routes>
      </>
    </div>
  )
}

export default App
