import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Authentication from './pages/Authentication'
import { AuthProvider } from './contexts/AuthContext'
import VideoMeetComponent from './pages/VideoMeetComponent'
import History from './pages/History'
import Home from './pages/Home'


function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <AuthProvider>
       <LandingPage/>
      </AuthProvider>
    },
    {
      path : "/auth",
      element : <AuthProvider>
       <Authentication/>
      </AuthProvider>
    },
    {
      path: "/:url",
      element : <AuthProvider>
        <VideoMeetComponent/>
      </AuthProvider>
    },
    {
      path: "/home",
      element : <AuthProvider>
        <Home />
      </AuthProvider>
    },
    {
      path: "/history",
      element : <AuthProvider>
        <History/>
      </AuthProvider>
    }

  ])


  return (
    <>
    
    <RouterProvider router={router} />
    
    </>
  )
}

export default App;
