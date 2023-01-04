import React from 'react'
import { HeaderWrapper } from './Header.styled'
import { Input, Notification, Profile } from '../index'


const Header = () => {
    return (
        <HeaderWrapper>
            <Input search placeholder="Search" />
            <Notification />
            <Profile />
        </HeaderWrapper>
    )
}

export default Header