import React from "react";
import { NavLink } from "react-router-dom";
import MenuList from '../../__mocks__/navigation'
import { NavWrapper } from "./Nav.styled";

const Nav = () => {
    return (
        <NavWrapper>
            {MenuList.map((menu) => (
                <NavLink to={menu.path} key={menu.id} className="nav-item">
                    {menu.icon}
                </NavLink>
            ))}
        </NavWrapper>
    );
};

export default Nav;
