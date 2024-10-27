import './App.css'
import Home from './Pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import About from './Pages/About'
import NotFound from './Components/NotFound/NotFound'
import LayoutOne from './Layout/LayoutOne'
import LayoutTwo from './Layout/LayoutTwo'
import Help from './Pages/Help'
import LayoutThree from './Layout/LayoutThree'
import Documentation from './Pages/Documentation'



function App() {
  let Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne />}>
          <Route index element={<Home />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/layoutTwo' element={<LayoutTwo />}>
          <Route index element={<Help />} />
        </Route>
        <Route path='/layoutThree' element={<LayoutThree />}>
          <Route index element={<Documentation />} />
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
