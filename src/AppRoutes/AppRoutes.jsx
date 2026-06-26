import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Landing from '../pages/Landing'
function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />} />

            </Routes>
        </>
    )
}

export default AppRoutes