import React, { useState } from 'react'
import './Navbar.css'


const Navbar = () => {
    const [isOpen, setIsOpen]= useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
        }
        
    return (
        <div className='nav-container'>
            <button className='btn-menu' 
                onClick={toggleMenu}>
                <i className="bi bi-list"></i>
            </button>
            <nav className='nav-compressed'>
                <div className='nav-top'>
                    <a href="">
                        <i className='bi bi-chat-text'></i> 
                    </a>
                    <a href="">
                        <i className='bi bi-telephone'></i>
                    </a>
                    <a href="">
                        <i className='bi bi-circle'></i>
                    </a>
                    <a href="">
                        <i className='bi bi-meta'></i>
                    </a>
                </div>
                <div className='nav-bottom'>
                    <a href="">
                        <i className='bi bi-star'></i>
                    </a>
                    <a href="">
                        <i className='bi bi-archive'></i>
                    </a>
                    <a href="">
                        <i className='bi bi-gear'></i>
                    </a>
                    <a href="">
                        <i className='bi bi-person'></i>
                    </a>
                </div>
            </nav>
        {   
            isOpen &&
            <nav className='nav-extended'>
                <div className='nav-top'>
                    <a href="">
                        <i className='bi bi-chat-text'></i> 
                        Chats
                    </a>
                    <a href="">
                        <i className='bi bi-telephone'></i> 
                        Calls
                    </a>
                    <a href="">
                        <i className='bi bi-circle'></i>
                        Status
                    </a>
                    <a href="">
                        <i className='bi bi-meta'></i>
                        Meta AI
                    </a>
                    </div>
                    <div className='nav-bottom'>
                    <a href="">
                        <i className='bi bi-star'></i>
                        Starred messages
                    </a>
                    <a href="">
                        <i className='bi bi-archive'></i>
                        Archived chats
                    </a>
                    <a href="">
                        <i className='bi bi-gear'></i>
                        Setting
                    </a>
                    <a href="">
                        <i className='bi bi-person'></i>
                        Profile
                    </a>
                </div>
            </nav>
            }
        </div>       
    )
}

export default Navbar