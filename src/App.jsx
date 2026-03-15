import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from "./Navbar"
import Footer from './Footer'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'

const myRouter  = createBrowserRouter([
  {
    path:"/",
    element:<>
      <Navbar></Navbar>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </>,
  },
])

const App = () => {
  return (
    <RouterProvider router={myRouter}>

    </RouterProvider>
  )
}

export default App