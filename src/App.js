import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EmailList from './EmailList';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Mail from './Mail';
import SendMail from './SendMail';
import Sidebar from './Sidebar';
import './App.css';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    
  auth.onAuthStateChanged( user => {
    if(user){
      dispatch(login({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL
      }))
    }
  })
    
  }, [])
  

  return (
    <BrowserRouter>

      {!user ? (<Login />) : (
      <div className="app">
        <Header />

        <div className='app__body'>
          <Sidebar />

          <Routes>
            <Route path='/mail' element={<Mail/>}/>
  
            <Route path='/' element={<EmailList/>}/>
          </Routes>
        </div>

        {sendMessageIsOpen && <SendMail />}
      </div>)}

    </BrowserRouter>
  );
}

export default App;
