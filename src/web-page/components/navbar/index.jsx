import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import './styles.css';

const Navbar = () => {
    const [translate] = useTranslation();

    const ITEMS = [
        { name: translate('navbar.lblHome'), url: '/' },
        { name: 'para inversionistas', url: '/investors' },
        { name: 'marketplace', url: '/marketplace' }
    ];

    return (
        <header className='fixed top-0 left-0 h-[13%] w-full bg-white text-primary-blue flex items-center justify-between px-32 
                border-[1px] border-custom-gray shadow-lg z-50'>

            <div className='h-full lg:w-20 xl:w-20 2xl:w-40 bg-logo bg-center bg-cover bg-no-repeat bg-local'></div>

            <ul className='relative h-full flex items-center justify-center'>
                {ITEMS.map((item, itemIdx) => {
                    return (
                        <Link className='h-full flex items-center hover:border-b-[3px] border-b-custom-purple' key={itemIdx} to={item.url}>
                            <li id="last-navbar-item"
                                className='relative list-none mx-4 text-lg capitalize font-light no-underline text-[#36395a] font-poppins'
                                key={itemIdx}>
                                {item.name}
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </header>
    )
}

export default Navbar;