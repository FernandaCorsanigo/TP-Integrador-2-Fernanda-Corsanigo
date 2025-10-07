import React, { useState } from 'react'
import './NavBar.css'
import ICONS from '../constants/icons'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='nav-container'>
            <button className='btn-menu'
                onClick={toggleMenu}>
                <ICONS.Burger />
            </button>
            <nav className='nav-compressed'>
                <div className='nav-compressed_top'>
                    <a href="">
                        <ICONS.Chat />
                    </a>
                    <a href="">
                        <ICONS.Phone />
                    </a>
                    <a href="">
                        <ICONS.Status />
                    </a>
                    <a href="">
                        <ICONS.MetaAI />
                    </a>
                </div>
                <div className='nav-compressed_bottom'>
                    <a href="">
                        <ICONS.Star />
                    </a>
                    <a href="">
                        <ICONS.Archive />
                    </a>
                    <a href="">
                        <ICONS.Settings />
                    </a>
                    <a href="">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="profile-picture" />
                    </a>
                </div>
            </nav>
            <nav className={'nav-extended'+(isOpen ? ' nav-extended-open' : '')}>
                    <div className='nav-extended_top'>
                        <button className='btn-menu-extended'><ICONS.Burger className='btn-menu-extended' /></button>

                        <a href="">
                            Chats
                            <span className="icon-placeholder" />
                        </a>
                        <a href="">
                            Calls
                            <span className="icon-placeholder" />
                        </a>
                        <a href="">
                            Status
                            <span className="icon-placeholder" />
                        </a>
                        <a href="">
                            Meta AI
                            <span className="icon-placeholder" />
                        </a>
                    </div>
                    <div className='nav-extended_bottom'>
                        <a href="">
                            Starred messages
                            <span className="icon-placeholder" />
                        </a>
                        <a href="">
                            Archived chats
                            <span className="icon-placeholder" />
                        </a>
                        <a href="">
                            Setting
                            <span className="icon-placeholder" />
                        </a>
                        <a href="">
                            Profile
                            <span className="picture-placeholder" />
                        </a>
                    </div>
            </nav>
            <nav className='nav-simplified'>
                    <a href="">
                        <ICONS.Chat />
                    </a>
                    <a href="">
                        <ICONS.Status />
                    </a>
                    <a href="">
                        <ICONS.Phone />
                    </a>
            </nav>
        </div>
    )
}

export default Navbar