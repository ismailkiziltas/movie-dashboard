import React from 'react'
import ProfileSvg from '../../assets/images/profile.svg'
import { ProfileImg } from './Profile.styled'

const Profile = () => {
    return (
        <ProfileImg src={ProfileSvg} alt="profile" />
    )
}

export default Profile