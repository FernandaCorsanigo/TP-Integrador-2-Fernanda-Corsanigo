import { createContext, useEffect, useState } from "react";
import { getAllContacts } from "../Componentes/services/contactservice";

export const ContactListContext = createContext({
    contactList: [],
});

const ContactListContextProvider = (props) => {
    const [contactList, setContactList] = useState([]);

    useEffect(() => {
        const contacts = getAllContacts();
        setContactList(contacts);
    },
    []);

    return (
        <ContactListContext.Provider 
            value={
                {contactList}
            }
        >
            {props.children}
        </ContactListContext.Provider>
    )
}

export default ContactListContextProvider