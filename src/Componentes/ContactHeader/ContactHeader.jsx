import React, { useState } from "react";
import ContactItem from "../ContactItem/ContactItem";
import ContactList from "../ContactList/ContactList";
import './ContactHeader.css'
import ICONS from "../constants/icons";
import { Link } from "react-router";

const ContactHeader = ({ contact }) => {
    const [showOverlay, setShowOverlay] = useState(false);
    return (
        <div className="contact-header-container">
            <div className="contact-header">
                <Link to={"/"} className="btn-back">
                    <ICONS.Arrow />
                </Link>
                <img 
                src={contact.avatar}
                alt="" 
                className="avatar" 
                onClick={() => setShowOverlay(true)}
                />
                <div className="contact-header-info">
                    <span className="contact-name">
                        {contact.name}
                    </span>
                    <span className="contact-time">
                        Last seen {''}
                        {contact.last_time_connected}
                    </span>

                </div>
            </div>
            <div className="contact-header-buttons">
                <div className="contact-header-buttons-left">
                    <button className="btn-video">
                        <ICONS.Video />
                    </button>
                    <div className="btn-phone-container">
                        <button className="btn-phone">
                            <ICONS.Phone onClick={'Llamadas'} />

                        </button>
                        <button className="btn-arrow-down">
                            <ICONS.ArrowDown />
                        </button>
                    </div>
                </div>
                <button className="btn-search">
                    <ICONS.Loupe />
                </button>
            </div>
        </div>

    );
};

export default ContactHeader