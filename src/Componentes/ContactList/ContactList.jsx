import React, { use, useState } from "react";
import { useContext } from "react";
import ContactItem from "../ContactItem/ContactItem";
import { ContactListContext } from "../../Contexts/ContactListContext";
import './ContactList.css'
import SearchBar from "../SearchBar/SearchBar";
import Spinner from "../Spinner/Spinner";

const ContactList = () => {
    const { contactList, 
            isContactListLoading,
            onChangeSearchTerm,
            searchTerm
        } = useContext(ContactListContext);
    const contactsFiltered = contactList.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
);

    return (
        <div className="contact-list-container">
            <SearchBar/>
        <div className="contacts-scrollable">
            {isContactListLoading
                ? <Spinner/>
                : <>{contactsFiltered.length === 0 
                ? <span className="no-results">No se encontraron resultados.</span>
                : contactsFiltered.map((contact) => {
                        return ( 
                            <ContactItem
                                className="contact-item"    key={contact.id} 
                                contact={contact}
                            />
                            )
                        }
                    )
                }
                </>
            }    
        </div>
        </div>
    );
}

export default ContactList