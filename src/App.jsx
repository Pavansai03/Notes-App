import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Pastes from './components/pastes.jsx'
import ViewPastes from './components/viewPastes.jsx'
import Home from './components/Home.jsx'
const router = createBrowserRouter(
  [
    {
      path:'/',
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
        <Navbar/>
        <Pastes/>
      </div>
    },
    {
      path:'/pastes/:id',
      element:
      <div>
        <Navbar/>
        <ViewPastes/>
      </div>
    },
    
  ]
)

function App() {
  

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
