import { createContext, useEffect, useState } from "react";
import { getAllContacts, getContactById } from "../Componentes/services/contactservice";

export const ContactListContext = createContext(
    {
    contactList: [],
    isContactListLoading: false
}
);

const ContactListContextProvider = (props) => {
    const [contactList, setContactList] = useState([]);
    const [isContactListLoading, setIsContactListLoading] = useState(false);


    const loadContactList = () => {
        setIsContactListLoading (true)
        setTimeout(
            () =>{
                const contacts_list_response = getAllContacts()
                setContactList(contacts_list_response)
                setIsContactListLoading(false)
            },
            100
        )
    }

    useEffect(
        () => {
        loadContactList()
        },
    []
);

    return (
        <ContactListContext.Provider 
            value={
                {
                contactList: contactList,
                isContactListLoading: isContactListLoading
                }
            }
        >
            {props.children}
        </ContactListContext.Provider>
    )
}

export default ContactListContextProvider