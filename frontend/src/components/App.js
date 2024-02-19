import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from './NavBar';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm'
import Home from './Home';
import VIP from './VIP';
import Classic from './Classic';



function App( ) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("http://127.0.0.1:3000/me").then((r) => {
      if(r.ok){
        r.json().then((user) => setUser(user))
      }
    })
  }, [])
  // if(!user) return <SignUpForm onLogin={setUser}/>

  return (
    <>
    <NavBar user={user} setUser={setUser}/>
    <main>
      <Router>
        <Routes>
          <Route exact path='/' element={<SignUpForm onLogin={setUser}/>}/>
          <Route exact path ="/login" element={<LoginForm onLogin={setUser}/>}/>
          <Route exact path ="/home" element={<Home onLogin={setUser} />}/>
          <Route exact path = "/vip" element= {<VIP onLogin={setUser} />}/>
          <Route exact path = "/classic" element={<Classic onLogin={setUser}/>}/>
        </Routes>
      </Router>
    </main>

    </>

  )
}

export default App;
