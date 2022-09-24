import React, { useLayoutEffect } from 'react';
import { 
    BrowserRouter, 
    Route, 
    Routes, 
    useLocation 
} from 'react-router-dom';

// COMPONENTS 
import {
    Navbar,
    Home,
    Marketplace,
    SearchSection,
    HouseInfoSection,
    HomeOwners,
    Investors
} from './components';

const Wrapper = ({ children } : any) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
}

const WebPage = () => {

    return (
        <div className='relative w-screen h-screen'>
            <BrowserRouter>
                <Wrapper>
                    <Navbar />

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='marketplace' element={<Marketplace />}>
                            <Route path='' element={<SearchSection />} />
                            <Route path='listings/:houseId' element={<HouseInfoSection />} />
                        </Route>
                        <Route path='homeowners' element={<HomeOwners/>} />
                        <Route path='investors' element={<Investors/>} />
                    </Routes>

                    <footer className='w-full flex flex-col justify-center items-center p-8 overflow-hidden bg-white'>
                        <h4 className='text-xs text-primary-blue'>Copyright © 2022, House Way Solutions Inc. - All rights reserved</h4>
                        <div className='mt-4 text-primary-blue'>
                            <i className="fab fa-facebook mr-4 scale-150"></i>
                            <i className="fab fa-instagram mr-4 scale-150"></i>
                            <i className="fab fa-linkedin mr-4 scale-150"></i>
                            <i className="fab fa-twitter scale-150"></i>
                        </div>
                    </footer>
                </Wrapper>
            </BrowserRouter>
        </div>
    )
}

export default WebPage;