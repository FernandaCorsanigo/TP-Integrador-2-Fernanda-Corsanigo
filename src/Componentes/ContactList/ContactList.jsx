import React, { use, useState } from "react";
import "./ContactList.css";
import { useContext } from "react";
import ContactItem from "../ContactItem/ContactItem";
import { ContactListContext } from "../../Contexts/ContactListContext";

function ContactList() {
    const { contactList } = useContext(ContactListContext);

    return (
        <div className="searchbar">
            <input
                type="text"
                placeholder="Search or start a new"
                className="search-bar" />
            {contactList.map((contact) => (
                <ContactItem key={contact.id} contact={contact} />
            ))}
        </div>
    );
}

export default ContactList