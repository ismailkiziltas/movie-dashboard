import React from 'react'
import { NavbarWrapper } from './Sidebar.styled'
import { Nav } from '../index'

const Sidebar = () => {
    return (
        <NavbarWrapper>
            <div className="logo"></div>
            <Nav />
        </NavbarWrapper>
    )
}

export default Sidebar