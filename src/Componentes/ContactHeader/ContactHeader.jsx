import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import ContactList from "../ContactList/ContactList";

const ContactHeader = ({contact}) => {
    return (
        <div className="contact_header">
            <img src={contact.avatar} alt="" />
            <span>
                {contact.name}
            </span>
            <button>
                <i className="fas fa-video"></i>
            </button>
            <button>
                <i className="fas fa-phone-alt"></i>
            </button>
            <button>
                <i className="fas fa-ellipsis-v"></i>
            </button>
        </div>
        
    );
}; 

export default ContactHeader