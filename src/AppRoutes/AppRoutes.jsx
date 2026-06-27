import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Landing from '../pages/Landing'
import InterAndJobs from '../pages/jobs_internships/InterAndJobs'
import Colleges from '../pages/colleges/Colleges'
import SignIn from '../pages/sign_in/SignIn'
function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/jobsInternships" element={<InterAndJobs />} />
                <Route path="/colleges" element={<Colleges />} />

            </Routes>
        </>
    )
}

export default AppRoutes