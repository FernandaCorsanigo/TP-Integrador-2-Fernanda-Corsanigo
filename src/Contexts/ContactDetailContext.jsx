import { createContext, useEffect, useState } from "react";
import { useParams, Outlet } from "react-router";
import { getContactById } from "../Componentes/services/contactservice";

export const ContactDetailContext = createContext (
    {
        isContactDetailLoading: false,
        contactDetailed: null,
        onCreateNewMessage: (new_message) => {}
    }
)
const ContactDetailContextProvider = (props) => {
    const [isContactDetailLoading, setIsContactDetailLoading] = useState (false)
    const [contactDetailed, setContactDetailed] = useState (null)
        const {id_contact} = useParams()

    function loadContactbyId(contact_id) {
        setIsContactDetailLoading(true)
        setTimeout(
            () => {
                const contact = getContactById(contact_id)
                setContactDetailed(contact)
                setIsContactDetailLoading(false)
        },
        400
    )
    }

    useEffect(
        () => {
            loadContactbyId(id_contact)
        },
        [id_contact]
    )
    const onCreateNewMessage = (new_message) => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // agrega 0 si es menor a 10
    const minutes = now.getMinutes().toString().padStart(2, '0');
        const new_message_object = {
            id: contactDetailed.messages.length + 1,
            author: 'Yo',
            content: new_message,
            timestamp: `${hours}:${minutes}`
        }
        setContactDetailed({...contactDetailed, messages:[...contactDetailed.messages, new_message_object]})
    }

    return (
        <ContactDetailContext.Provider
            value={
                {
                    isContactDetailLoading: isContactDetailLoading, 
                    contactDetailed : contactDetailed,
                    onCreateNewMessage: onCreateNewMessage
                }}
                >
            <Outlet/>
        </ContactDetailContext.Provider>
    )
}

export default ContactDetailContextProvider