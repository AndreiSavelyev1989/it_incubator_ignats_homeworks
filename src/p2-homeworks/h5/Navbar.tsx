import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import style from "./Navbar.module.css"

export function Navbar() {
    return (
        <div className={style.navbarBlock}>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={style.active}>PreJunior</NavLink>
                <NavLink to={PATH.JUNIOR} activeClassName={style.active}>Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} activeClassName={style.active}>JuniorPlus</NavLink>
        </div>
    );
}
