import React from 'react'
import { Header, Sidebar, RouterView } from '../index'
import { MainWrapper, LayoutWrapper } from './Layout.styled'

const Layout = () => {
    return (
        <LayoutWrapper>
            <Header />
            <MainWrapper >
                <RouterView />
            </MainWrapper>
            <Sidebar />
        </LayoutWrapper>
    )
}

export default Layout