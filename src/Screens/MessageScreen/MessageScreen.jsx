import React, { useEffect, useState } from 'react'
import MessagesList from '../../Componentes/MessagesList/MessagesList';
import Navbar from '../../Componentes/Navbar/Navbar';
import NewMessageForm from '../../Componentes/NewMessageForm/NewMessageForm';
import { useParams } from 'react-router';
import { getContactById } from '../../Componentes/services/contactservice';
import ContactList from '../../Componentes/ContactList/ContactList';
import './MessageScreen.css'

function MessageScreen() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            author: 'Yo',
            content: "¡Hola! 😃 ¿Hace cuánto que no nos vemos?",
            timestamp: '16:17'
        },
        {
            id: 2,
            author: 'Miriam',
            content: "¡Hola! Uff, creo que más de un año.",
            timestamp: '16:20'
        },
        {
            id: 3,
            author: 'Yo',
            content: "Sí, desde la última reunión en casa de Franco",
            timestamp: '16:23'
        },        
        {
            id: 4,
            author: 'Miriam',
            content: "Tenés razón. ¿Y cómo va todo?",
            timestamp: '16:27'
        },
        {
            id: 5,
            author: 'Yo',
            content: "Bien, trabajando mucho, pero con ganas de tomarme unas vacaciones",
            timestamp: '16:32'
        },
        {
            id: 6,
            author: 'Miriam',
            content: "Jaja, igual que yo. ¿Tenés algo planeado?",
            timestamp: '16:36'
        },
        {
            id: 7,
            author: 'Yo',
            content: " Sí, estoy pensando en irme a la playa unos días",
            timestamp: '16:40'
        },
        {
            id: 8,
            author: 'Miriam',
            content: "Qué bueno, yo me voy al sur en diciembre",
            timestamp: '16:42'
        },
                {
            id: 9,
            author: 'Yo',
            content: "¡Genial! Tenemos que organizarnos para vernos antes de fin de año",
            timestamp: '16:46'
        },
        {
            id: 10,
            author: 'Miriam',
            content: "De una, me encantaría",
            timestamp: '16:50'
        }
    ]
    )
    const onCreateNewMessage = (new_message) => {
        const new_message_object = {
            id: messages.length + 1,
            author: 'Yo',
            content: new_message,
            timestamp: '16:55'
        }
        setMessages([...messages, new_message_object])
    }

    const {id_contact} = useParams()

    useEffect(
        () => {
            const contact = getContactById(id_contact)
            setMessages(contact.messages)
        },
        [id_contact]
    )

    return (
        <div className='message-screen'>
            <div className='message-screen__navbar'>
                <Navbar />
            </div>
            <div className='message-screen__contact-list-container'>
                <ContactList />
            </div>
            <div className='message-screen__messages-list-container'>
                <MessagesList messages={messages} />
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