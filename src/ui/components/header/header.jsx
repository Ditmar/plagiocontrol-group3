import React from 'react'
import photo from './assets/img/photo.jpg'
import '../header/header.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosNotifications } from 'react-icons/io'
const Header = () => {
    return(
        <header>
            <div className='wrapper'>
                <h2 className='name-navbar'>Overview</h2>    
                <div className='buscador'>
                    <input type='text' className='buscador'/>
                        <button className='search'>
                        <AiOutlineSearch/>
                        </button>
                        <button className='notifications'>
                        <IoIosNotifications/>
                        </button>
                </div>
       
                <div>
                    <hr className='v'/>
                </div>
                <div>
                    <h3 className='name'>Mohamed</h3>
                </div>
                <div>
                    <img src={ photo } className='foto'/>
                </div>
             </div>
        </header>
    )
}
export default Header
