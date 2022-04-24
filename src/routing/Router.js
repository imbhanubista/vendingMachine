import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mainpage from '../components/Mainpage'
import Purchased from '../components/Purchased'
import Refund from '../components/Refund'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/purchased' element={<Purchased/>}/>
        <Route path='/refund' element={<Refund/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router