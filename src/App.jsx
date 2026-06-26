import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import AppRoutes from './AppRoutes/AppRoutes'
import Navbar from './component/navigation/Navbar'

// Routinf codes has different file .
function App() {
    return (
        <>
            <BrowserRouter>
            <Navbar />
                <AppRoutes />
            </BrowserRouter>
        </>
    )
}

export default App