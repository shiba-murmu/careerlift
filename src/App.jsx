import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import AppRoutes from './AppRoutes/AppRoutes'
import Navbar from './component/navigation/Navbar'
import Footer from './component/footer/Footer'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function ScrollToTop() {
    // Access the current route location object from react-router-dom
    const { pathname } = useLocation();

    useEffect(() => {
        // Trigger a native scroll reset immediately when pathname changes
        window.scrollTo(0, 0);
        
        // Alternative smooth animation if you prefer a subtle transition effect:
        /*
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        */
    }, [pathname]); // This dependency array ensures execution on every single route swap

    return null; // This component strictly executes side effects; it renders no visual markup
}
// Routinf codes has different file .
function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Navbar />
                <AppRoutes />
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App