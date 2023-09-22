import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Login from '../pages/Login';
import NavBar from './NavBar';


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("http://127.0.0.1:3000/me").then((r) => {
      if(r.ok){
        r.json().then((user) => setUser(user))
      }
    })
  }, [])
  if(!user) return <Login onLogin={setUser}/>

  return (
    <>

    <NavBar user= {user} setUser={setUser}/>

    {/* <main>
      <Routes>

      </Routes>
    </main> */}

    </>

  )
}

export default App;
