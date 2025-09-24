import LoginForm from './component/LoginForm/LoginForm'
import './App.css'
import { Route,  Routes } from 'react-router-dom'

import Home from './component/Home/Home'
import { CreateContext } from './component/UseContext/CreateContext'
import { useState } from 'react'


function App() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("");





  return (
    <>
      
      <CreateContext.Provider value={{name,setName,email,setEmail}}>
         <Routes>
          <Route path="/" element={<LoginForm />} />

          <Route path="/Home" element={<Home />} />


        </Routes>

      </CreateContext.Provider>
       
      
       
      


    </>
  )
}

export default App
