import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return(
        <header className='header'>
            <a href='/' className='logo'>.bakershop</a>
            <nav className='navbar'>
                <ul>
                    <li>about us</li>
                    <li>products</li>
                    <li>order</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar