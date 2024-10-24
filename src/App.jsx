import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Navbar/Footer/Footer'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import About from './Pages/About'
import NotFound from './Components/NotFound/NotFound'

function App() {
  let Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return (
    <>
    <Navbar />
    <RouterProvider router={Router} />
    <Footer />
    </>
  )
}

export default App
