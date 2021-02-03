import React from "react";
import {Navbar} from "./Navbar";
import style from "./Header.module.css"

function Header() {
    return (
        <div className={style.headerBlock}>
            <Navbar/>
        </div>
    );
}

export default Header;
