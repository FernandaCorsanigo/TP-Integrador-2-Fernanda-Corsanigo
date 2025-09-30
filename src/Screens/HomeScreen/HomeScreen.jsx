import React from 'react'
import ContactList from '../../Componentes/ContactList/ContactList'
import NavBar from '../../Componentes/NavBar/NavBar'

const HomeScreen = () => {
    return (
        <div>
            <div>
                <NavBar/>
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