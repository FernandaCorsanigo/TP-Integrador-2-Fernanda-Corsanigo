import React from 'react'
import ContactList from '../../Componentes/ContactList/ContactList'
import Navbar from '../../Componentes/Navbar/Navbar'

const HomeScreen = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className='contact-list'>
                <ContactList/>
            </div>
            <div>
                <span>Not contact selected</span>
            </div>
        </div>
    )
}

export default HomeScreen