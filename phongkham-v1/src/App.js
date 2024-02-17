import './App.css';
import Home from "./screens/Home";
import Login from './screens/Login';
import Register from './screens/Register';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Booking from './screens/Booking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/booking' element={<Booking />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
