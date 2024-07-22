import Nav from '../components/Nav';
import FooterBar from '../components/FooterBar';
import React from 'react';

function LayoutNavAndFooter({ children }: { children: React.ReactNode} )  {
    return (  
        <>
            <Nav />
            {children}
            <FooterBar />
        </>
    );
}

export default LayoutNavAndFooter;