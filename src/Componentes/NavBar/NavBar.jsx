import React, { useEffect, useRef, useState } from 'react'
import './NavBar.css'
import ICONS from '../constants/icons'
import { Link } from 'react-router'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeTab, setActiveTab] = useState('Chats');
    const menuRef = useRef(null)
    const btnRef = useRef(null)


    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isOpen && 
                menuRef.current 
                && !menuRef.current.contains(event.target)
                &&
                btnRef.current &&
                !btnRef.current.contains(event.target)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    },
        [isOpen])

    return (
        <div className='nav-container'>
            <button className='btn-menu'
                ref={btnRef}
                onClick={toggleMenu}>
                <ICONS.Burger />
            </button>
            <nav className='nav-compressed'>
                <div className='nav-compressed_top'>
                    <Link to="">
                        <ICONS.Chat />
                    </Link>
                    <Link to="">
                        <ICONS.Phone />
                    </Link>
                    <Link to="">
                        <ICONS.Status />
                    </Link>
                    <Link to="">
                        <ICONS.MetaAI />
                    </Link>
                </div>
                <div className='nav-compressed_bottom'>
                    <Link to="">
                        <ICONS.Star />
                    </Link>
                    <Link to="">
                        <ICONS.Archive />
                    </Link>
                    <Link to="">
                        <ICONS.Settings />
                    </Link>
                    <Link to="">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="profile-picture" />
                    </Link>
                </div>
            </nav>
            <nav
                ref={menuRef}
                className={'nav-extended' + (isOpen ? ' nav-extended-open' : '')}>
                <div className='nav-extended_top'>
                    <button className='btn-menu-extended'><ICONS.Burger className='btn-menu-extended' /></button>

                    <Link to="">
                        Chats
                        <span className="icon-placeholder" />
                    </Link>
                    <Link to="">
                        Calls
                        <span className="icon-placeholder" />
                    </Link>
                    <Link to="">
                        Status
                        <span className="icon-placeholder" />
                    </Link>
                    <Link to="">
                        Meta AI
                        <span className="icon-placeholder" />
                    </Link>
                </div>
                <div className='nav-extended_bottom'>
                    <Link to="">
                        Starred messages
                        <span className="icon-placeholder" />
                    </Link>
                    <Link to="">
                        Archived chats
                        <span className="icon-placeholder" />
                    </Link>
                    <Link to="">
                        Setting
                        <span className="icon-placeholder" />
                    </Link>
                    <Link to="">
                        Profile
                        <span className="picture-placeholder" />
                    </Link>
                </div>
            </nav>
            <nav className='nav-mobile'>
                <Link
                    to=""
                    className={activeTab === 'Chats' ? 'active' : ''}
                    onClick={() => setActiveTab('Chats')}
                >
                    <ICONS.Chat className='icon' />
                    Chats
                </Link>

                <Link
                    to=""
                    className={activeTab === 'Status' ? 'active' : ''}
                    onClick={() => setActiveTab('Status')}
                >
                    <ICONS.Status className='icon' />
                    Updates
                </Link>

                <Link
                    to=""
                    className={activeTab === 'Communities' ? 'active' : ''}
                    onClick={() => setActiveTab('Communities')}
                >
                    <ICONS.People className='icon' />
                    Communities
                </Link>

                <Link
                    to=""
                    className={activeTab === 'Llamadas' ? 'active' : ''}
                    onClick={() => setActiveTab('Llamadas')}
                >
                    <ICONS.Phone className='icon' />
                    Calls
                </Link>
            </nav>
        </div>
    )
}

export default Navbar