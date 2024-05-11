import React from 'react'
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {LoginPage, SignupPage, LandingPage, FormPage, FormPage2,FormPage3} from './routes/Routes.js'


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path = '/login' element = {<LoginPage/>} />
    <Route path = '/signup' element = {<SignupPage/>} />
    <Route path = '/' element = {<LandingPage/>} />
    <Route path = '/form1' element = {<FormPage/>} />
    <Route path = '/form2' element = {<FormPage2/>} />
    <Route path = '/form3' element = {<FormPage3/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App