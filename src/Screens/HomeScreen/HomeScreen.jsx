import React from 'react'
import ContactList from '../../Componentes/ContactList/ContactList'
import NavBar from '../../Componentes/NavBar/NavBar'
import './HomeScreen.css'

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
                <span>Not contact selected</span>
            </div>
        </div>
    )
}

export default HomeScreen