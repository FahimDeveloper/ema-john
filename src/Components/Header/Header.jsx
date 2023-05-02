import React from 'react';
import NavItem from './NavItem';
import Logo from "../../assets/images/Logo.svg"
import { Link } from 'react-router-dom';

const Header = () => {
    const navItems = [
        {
            path: '/',
            name: 'home'
        },
        {
            path: '/shop',
            name: 'shop'
        },
        {
            path: '/order',
            name: 'order'
        },
        {
            path: '/login',
            name: 'login'
        }
    ];

    return (
        <div className='bg-secondary py-2'>
            <div className='container mx-auto flex items-center justify-between'>
                <div>
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className='flex gap-x-5'>
                    {navItems.map((navLink, index) => <NavItem {...navLink} key={index} />)}
                </div>
            </div>
        </div>
    );
};

export default Header;