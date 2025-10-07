import React, { useState } from 'react';
import './SearchBar.css';
import ICONS from '../constants/icons';

const SearchBar = () => {
    const [activeButton, setActiveButton] = useState('All');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className='search-bar-section'>
            <div>
                <h2>WhatsApp</h2>
            </div>

            <div className="search-bar-container">
                <ICONS.Loupe className='search-icon'/>
                <input
                    type="text"
                    placeholder="Search or start a new chat"
                    className='search-bar'
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