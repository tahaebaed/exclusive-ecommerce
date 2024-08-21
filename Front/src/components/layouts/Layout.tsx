import React from 'react';
import Header from './Header';
import Footer from './Footer';


type TLayoutProps = {
    children: React.ReactNode;
}

function Layout({children} : TLayoutProps) {
    return (
        <>
            <Header />
                <main>
                    {children}
                </main>
            <Footer />
        </>
    )
}

export default Layout;