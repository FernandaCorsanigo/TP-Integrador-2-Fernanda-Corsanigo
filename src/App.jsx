import React, { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import MessageScreen from './Screens/MessageScreen/MessageScreen';
import { Route, Routes } from 'react-router';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import ContactListContextProvider from './Contexts/ContactListContext';

function App() {

  return (
    <div>
      <ContactListContextProvider>
        <Routes>
          <Route 
          path='/' 
          element={<HomeScreen/>}
          />
          <Route
          path='/contact/:id_contact'
          element={<MessageScreen/>}
          />
        </Routes>
      </ContactListContextProvider>
    </div>
  )
}

export default App