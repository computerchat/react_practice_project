import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navlink.module.css';
export default function CustomNavLink (){
    return (
        <nav className="mt-1">
<ul className={styles.ul  }>
    <li className={styles.li}>
<NavLink to="/" className={styles.navlink}>Homes</NavLink>

<NavLink to="/signin" className={styles.navlink}>Signin</NavLink>

<NavLink to="/signup" className={styles.navlink}>Signup</NavLink>
<NavLink to="/dashboard" className={styles.navlink}>Dashboard</NavLink>

</li>
</ul>
</nav>
    );
}