import React, { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import MessageScreen from './Screens/MessageScreen/MessageScreen';
import { Route, Routes } from 'react-router';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import ContactListContextProvider from './Contexts/ContactListContext';
import ContactDetailContextProvider from './Contexts/ContactDetailContext';
import './Global.css'
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
            element={<ContactDetailContextProvider/>}
            >
            <Route
            path='/contact/:id_contact'
            element={<MessageScreen/>}
            />
          </Route>

        </Routes>
      </ContactListContextProvider>
    </div>
  )
}

export default App