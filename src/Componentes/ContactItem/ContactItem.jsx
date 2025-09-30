import React from "react";
import "./ContactItem.css";
import { Link } from "react-router";

const ContactItem = (props) => {
    const contact = props.contact
    return(
        <Link to={'/contact/' + contact.id}>
        <div className="contact">
            <img src={contact.avatar} alt="" className="avatar"/>
            <div className="contact-info">
                <div className="contact-top">
                    <span className="contact-name">
                        {contact.name}
                    </span>
                    <span className="contact-time">
                        {contact.time}
                    </span>
                </div>
                <p className="last-message">
                    {contact.lastMessage}
                </p>
                <span>En linea: {contact.is_connected? "Si" : "No"}
                </span>
            </div>
        </div>
        </Link>
    )
}

export default ContactItem
