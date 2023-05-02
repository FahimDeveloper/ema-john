import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <div>
            <NavLink
                to={props.path}
                className={`text-lg font-normal capitalize text-base-100 ${(isActive) => isActive ? "active" : ""}`}
            >
                {props.name}
            </NavLink >
        </div >
    );
};

export default NavItem;