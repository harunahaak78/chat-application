import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar';
import HomePage from './page/home';
import LoginPage from './page/login';
import SignUp from './page/signup';
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    
    
      <Navbar/>
      <HomePage/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      
    
     
    </>
 
  );
}

export default App;
