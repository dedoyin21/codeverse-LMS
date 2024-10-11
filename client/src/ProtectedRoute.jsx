import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(
          'https://codeverse-lms.onrender.com/checkAuth',
          {
            credentials: 'include',
          }
        )
        setIsAuthenticated(response.ok)
      } catch (error) {
        console.error('Auth check failed:', error)
        setIsAuthenticated(false)
      }
    }

    checkAuth()
  }, []); {/*There is an issue with the backend server but it seems to be working fine on localhost*/}

  if (isAuthenticated === null) {
    return <div>Loading...</div>
  }

  return isAuthenticated ? children : <Navigate to="/sign-in" />
}

export default ProtectedRoute
