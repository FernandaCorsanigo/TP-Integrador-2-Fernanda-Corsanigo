import React from 'react'
import ContactList from '../../Componentes/ContactList/ContactList'
import NavBar from '../../Componentes/NavBar/NavBar'
import './HomeScreen.css'
import ICONS from '../../Componentes/constants/icons'
ICONS

const HomeScreen = () => {
    return (
        <div className='home-screen-container'>
            <div className='home-screen__navbar'>
                <NavBar/>
            </div>
            <div className='home-screen__contact-list-container'>
                <ContactList/>
            </div>
            <div className='home-screen__messages-list-container'>
                <div className='home-screen__messages-list-container'>
                <ICONS.Whatsapp className='whatsapp-icon' />
                <h2>WhatsApp for Windows</h2>
                <p>Send and receive messages without keeping your phone online</p>
                <p>Use WhatsApp on up to 4 linked devices and 1 phone at the same time</p>
                </div>
                <span>
                    <ICONS.Lock/>
                    End-to-end encrypted
                </span>
            </div>
        </div>
    )
}

export default HomeScreen