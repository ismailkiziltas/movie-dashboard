import React from 'react'
import { IoMdNotifications } from 'react-icons/io'
import { NotificationWrapper, NotificationCount } from './Notification.styled'

const Notification = () => {
    return (
        <NotificationWrapper>
            <IoMdNotifications />
            <NotificationCount>12</NotificationCount>
        </NotificationWrapper>
    )
}
export default Notification