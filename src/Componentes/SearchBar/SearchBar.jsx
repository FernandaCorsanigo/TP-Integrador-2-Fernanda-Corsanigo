import React, { useState } from 'react';
import './SearchBar.css';
import ICONS from '../constants/icons';
import { ContactListContext } from '../../Contexts/ContactListContext';
import { useContext } from 'react';

const SearchBar = () => {
    const { searchTerm, onChangeSearchTerm } = useContext(ContactListContext);
    const [activeButton, setActiveButton] = useState('All');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className='search-bar-section'>
            <div>
                <h1>WhatsApp</h1>
            </div>

            <div className="search-bar-container">
                <ICONS.Loupe className='search-icon'/>
                <input
                    type="text"
                    placeholder="Search or start a new chat"
                    className='search-bar'
                    value={searchTerm}                
                    onChange={onChangeSearchTerm}
                />
            </div>

            <div className='search-bar-buttons'>
                {['All', 'Unread', 'Favourite', 'Group'].map((btn) => (
                    <button
                        key={btn}
                        className={activeButton === btn ? 'active' : ''}
                        onClick={() => handleButtonClick(btn)}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;