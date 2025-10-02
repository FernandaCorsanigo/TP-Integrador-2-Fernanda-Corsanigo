import React, { use, useState } from "react";
import { useContext } from "react";
import ContactItem from "../ContactItem/ContactItem";
import { ContactListContext } from "../../Contexts/ContactListContext";
import './ContactList.css'
import SearchBar from "../SearchBar/SearchBar";
import Spinner from "../Spinner/Spinner";

const ContactList = () => {
    const { contactList, isContactListLoading } = useContext(ContactListContext);

    return (
        <div className="contact-list-container">
            {
                isContactListLoading
                ? <Spinner/>
                : <>
                    <SearchBar/>
                    {contactList.map((contact) => {
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
    );
}

export default ContactList