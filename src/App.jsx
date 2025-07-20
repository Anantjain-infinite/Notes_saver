import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom"
// import { Routes } from "react-router"
import './App.css'
import Navbar from './components/navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/Viewpaste'

const router = createBrowserRouter(
  [
    {
      path:"/",
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
        <Paste/>
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
        <Navbar/>
        <ViewPaste/>
      </div>
    },
  ]
)

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
