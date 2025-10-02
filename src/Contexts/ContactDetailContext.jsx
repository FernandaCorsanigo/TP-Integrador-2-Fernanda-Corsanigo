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
        300
    )
    }

    useEffect(
        () => {
            loadContactbyId(id_contact)
        },
        [id_contact]
    )
    const onCreateNewMessage = (new_message) => {
        const new_message_object = {
            id: contactDetailed.messages.length + 1,
            author: 'Yo',
            content: new_message,
            timestamp: '16:55'
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