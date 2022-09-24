import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [translate] = useTranslation();

    const ITEMS = [
        { name: translate('navbar.lblHome'), url: '/' },
        { name: 'para inversionistas', url: '/investors' },
        { name: 'marketplace', url: '/marketplace' }
    ];

    return (
        <header className='fixed top-0 left-0 h-[13%] w-full bg-white text-primary-blue flex items-center justify-between px-32 
                py-7 border-[1px] border-custom-gray shadow-lg z-10'>

            <div className='h-full lg:w-20 xl:w-20 2xl:w-40 bg-logo bg-center bg-cover bg-no-repeat bg-local'></div>

            <ul className='relative flex items-center justify-center'>
                {ITEMS.map((item, itemIdx) => {
                    return (
                        <Link key={itemIdx} to={item.url}>
                            <li id="last-navbar-item"
                                className='relative list-none mx-4 capitalize font-light no-underline text-primary-blue'
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