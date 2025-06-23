import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Thought from './components/Thought'
import ViewThought from './components/ViewThought'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <NavBar />
        <Home />
      </div>
    },
    {
      path:"/thought",
      element:
      <div>
        <NavBar />
        <Thought />
      </div>
    },
    {
      path:"/thought/:id",
      element:
      <div>
        <NavBar />
        <ViewThought />
      </div>
    }
  ]
)

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App