import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Intro from './components/intro'
import Profile from './components/profile'
import Login from './components/login'
import Signup from './components/signup'
import Users from './database/Users'
import User from './database/User'
function App() {

  function signupHandler(data){
    
    Users.push(data)
    console.log(Users)
  }




  function loginHandler(data) {
    const { email, password } = data;
    if (!email || !password) throw new Error("Fill the form");
    const foundUser = Users.find(user => user.email === email);
    if (!foundUser) throw new Error("User doesn't exist");
    if (foundUser.password !== password) throw new Error("Incorrect password");
    Object.assign(User, foundUser);
    console.log("Logged in user:", User);
  }
  



  return (
    <Router>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login loginHandler={loginHandler} />} />
        <Route path='/signup' element={<Signup signupHandler={signupHandler} />} />
      </Routes>
    </Router>
  )
}

export default App
