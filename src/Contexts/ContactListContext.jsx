import { createContext, useEffect, useState } from "react";
import { getAllContacts, getContactById } from "../Componentes/services/contactservice";

export const ContactListContext = createContext(
    {
    contactList: [],
    isContactListLoading: false,
    onChangeSearchTerm: () => {},
    searchTerm: ''
}
);

const ContactListContextProvider = (props) => {
    const [contactList, setContactList] = useState([]);
    const [isContactListLoading, setIsContactListLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')

    function onChangeSearchTerm (event){
        const new_search_term = event.target.value
        setSearchTerm(new_search_term)
    }

    const loadContactList = () => {
        setIsContactListLoading (true)
        setTimeout(
            () =>{
                const contacts_list_response = getAllContacts()
                setContactList(contacts_list_response)
                setIsContactListLoading(false)
            },
            350
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
                isContactListLoading: isContactListLoading,
                searchTerm: searchTerm, 
                onChangeSearchTerm: onChangeSearchTerm
                }
            }
        >
            {props.children}
        </ContactListContext.Provider>
    )
}

export default ContactListContextProvider