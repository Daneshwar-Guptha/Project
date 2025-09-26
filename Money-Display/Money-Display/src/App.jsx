
import './App.css'
import Home from './component/Home/Home';
import LoginForm from './component/LoginForm/LoginForm';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Cart from './component/Cart/Cart';

function App() {


  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Cart" element={<Cart/>} />

      </Routes>

    </div>

  )
}

export default App
