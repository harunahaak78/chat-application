import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './page/home';
import LoginPage from './page/login';
import SignUp from './page/signup';
import {  Route, Routes } from 'react-router-dom';
import ChatRoom from './component/chatRoom';

function App() {
  return (
    <>
    
    
    

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/chatroom" element={<ChatRoom/>}/>
      </Routes> 

    
      
    
     
    </>
 
  );
}

export default App;
