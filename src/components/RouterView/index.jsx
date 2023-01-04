import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Reports, Users, Badges } from '../../Views/index'

const RouterView = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/badges" element={<Badges />} />
        </Routes>
    )
}

export default RouterView