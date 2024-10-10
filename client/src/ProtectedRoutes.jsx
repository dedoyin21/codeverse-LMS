import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null) 

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:8080/checkAuth', {
          credentials: 'include',
        })
        if (response.ok) {
          setIsAuthenticated(true)
        } else {
          setIsAuthenticated(false)
        }
      } catch (error) {
        setIsAuthenticated(false)
      }
    }

    checkAuth()
  }, [])

  if (isAuthenticated === null) {
    return <div>Loading...</div> 
  }

  return isAuthenticated ? children : <Navigate to="/sign-in" />
}

export default ProtectedRoute
