import React from "react";
import "./ContactItem.css";
import { Link } from "react-router";
import { ContactListContext } from "../../Contexts/ContactListContext";
ContactListContext

const ContactItem = (props) => {
    const contact = props.contact
    return(
        <Link to={'/contact/' + contact.id} className="contact-link">
        <div className="contact">
            <img src={contact.avatar} alt="" className="avatar"/>
            <div className="contact-info">
                <div className="contact-top">
                    <span className="contact-name">
                        {contact.name}
                    </span>
                    <span className="contact-time">
                    {contact.messages[contact.messages.length - 1].timestamp}
                    </span>
                </div>
                <p className="last-message">
                    {contact.messages[contact.messages.length - 1].content}
                </p>
            </div>
        </div>
        </Link>
    )
}

export default ContactItem
