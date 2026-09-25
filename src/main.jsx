
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import HomePage from './pages/HomePage.jsx'
import MyLayOut from './layouts/MyLayOut.jsx'
import HomeAppl from './pages/HomeAppl.jsx'
import Mens from './pages/Mens.jsx'
import Womens from "./pages/Womens.jsx"
import Books from "./pages/Books.jsx"

const router=createBrowserRouter(createRoutesFromElements(

<Route path="/" element={<MyLayOut/>}>
  <Route index element={<HomePage/>}/>
  <Route path="/homeAppl" element={<HomeAppl/>}/>
  <Route path="/mens" element={<Mens/>}/>
  <Route path="/womens" element={<Womens/>}/>
  <Route path="/books" element={<Books/>}/>
</Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>

  </StrictMode>
)
