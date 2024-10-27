import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children, basketCount }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar at the top */}
            <Sidebar basketCount={basketCount} />
            
            {/* Main content area */}
            <div className="flex-grow p-4">
                {children}
            </div>
        </div>
    );
};

export default Layout;