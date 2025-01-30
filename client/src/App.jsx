import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
/* import ProtectedRoute from './ProtectedRoute' */
import CalendarPage from './pages/Calendar'
import CoursePage from './component/CoursePage/CoursePage'
import { ThemeProvider } from '../src/Context/ThemeContext'
import Themelayout from './Layout/Themelayout'


function App() {
  return (
    <div className="App">
      <>
      <ThemeProvider>
        <Themelayout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route
            path="/dashboard"
            element={
               <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute> 
            }
          /> */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />    
          <Route path="/calendar" element={<CalendarPage />} /> 
          <Route path="/coursepage" element={<CoursePage />} />  

        </Routes>
        </Themelayout>
        </ThemeProvider>
      </>
    </div>
  )
}

export default App
