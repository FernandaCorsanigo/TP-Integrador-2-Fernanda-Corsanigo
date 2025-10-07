import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import ContactList from "../ContactList/ContactList";
import './ContactHeader.css'
import ICONS from "../constants/icons";
const ContactHeader = ({contact}) => {
    return (
        <div className="contact-header-container">
            <div className="contact-header">
                <img src={contact.avatar} alt="" className="avatar"/>
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
                        <ICONS.Video/>
                    </button>
                    <button className="btn-phone">
                        <ICONS.Phone/>
                    </button>
                </div>
                <button className="btn-search">
                    <ICONS.Loupe/>
                </button>
            </div>
        </div>
        
    );
}; 

export default ContactHeader