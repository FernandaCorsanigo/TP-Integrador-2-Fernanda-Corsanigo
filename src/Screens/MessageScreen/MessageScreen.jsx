import React, { useContext, useEffect, useState } from 'react'
import MessagesList from '../../Componentes/MessagesList/MessagesList';
import NavBar from '../../Componentes/NavBar/NavBar';
import NewMessageForm from '../../Componentes/NewMessageForm/NewMessageForm';
import ContactList from '../../Componentes/ContactList/ContactList';
import './MessageScreen.css'
import { ContactDetailContext } from '../../Contexts/ContactDetailContext';
import ContactHeader from '../../Componentes/ContactHeader/ContactHeader';
import Spinner from '../../Componentes/Spinner/Spinner';

function MessageScreen() {
    const{isContactDetailLoading, contactDetailed, onCreateNewMessage} = useContext(ContactDetailContext)

    return (
        <div className='message-screen'>
            <div className='message-screen__navbar'>
                <NavBar />
            </div>
            <div className='message-screen__contact-list-container'>
                <ContactList />
            </div>
            <div className='message-screen__messages-list-container'>
                {
                    isContactDetailLoading
                    ? <Spinner/>
                    :(
                        contactDetailed
                        ?
                        <>
                            <ContactHeader 
                            contact={contactDetailed} />
                            <MessagesList
                            messages={contactDetailed.messages} />
                        </>
                        :<span>No contact selected</span>
                    )
                }
                <div className='message-screen__new-message-container'>
                    <NewMessageForm
                        onCreateNewMessage={onCreateNewMessage}
                    />
                </div>
            </div>
        </div>
    )
}

export default MessageScreen