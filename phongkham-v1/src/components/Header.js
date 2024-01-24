import React from 'react';
import '../style/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='header'>
            <a href="#">
                <img className='brand' src="https://via.placeholder.com/260x62" alt="Logo" width="260" height="62"></img>
            </a>
            <h3>Chăm sóc sức khỏe trọn đời cho bạn</h3>
            <div className='searchBox'>
                <input type='text' placeholder='Tìm kiếm...' required></input>
                <a href='#'>
                    <FontAwesomeIcon style={{ backgroundColor: 'transparent', color: '#006632' }} icon={faSearch} />
                </a>
            </div>
        </div>
    );
};

export default Header;