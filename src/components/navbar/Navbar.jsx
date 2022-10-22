import React from "react";
import classes from './Navbar.module.scss';

const Navbar = () => {

    const navbarItems = [
        {
            key: 'home',
            title: 'Home'
        },
        {
            key: 'portfolio',
            title: 'Portfolio'
        },
        {
            key: 'agency',
            title: 'Agency'
        },
        {
            key: 'services',
            title: 'Services'
        },
        {
            key:'journal',
            title: 'Journal'
        },
        {
            key: 'contact',
            title: 'Contact'
        }
    ]

    return (
        <div>
            <div className={classes["navbar"]} id="navbar">
                <div className={classes['content']}>
                    <a href="#" className={classes["logo"]}>F.C</a>
                    <div className={classes["header-items"]}>
                        {navbarItems.map(item =>
                            <a href="#" key={item.key} className={classes['navbar-item']}>{item.title}</a>
                        )}
                    </div>
                    <span onClick={() => openMobileNavbar()} style={{float: "right"}}>
                        <i className="fa fa-bars"></i>
                    </span>
                </div>
            </div>

            <div id={'mobile_navbar'} className={classes["mobile-navbar"]}>
                <a className={classes["close-navbar-button"]} onClick={() => closeMobileNavbar()}>
                    <i className="fa fa-close" style={{fontSize: "30px"}}></i>
                </a>
                <div className={classes["mobile-navbar-items"]}>
                    {navbarItems.map(item =>
                        <a href="#" key={item.key}>{item.title}</a>
                    )}
                </div>
            </div>
        </div>
    )
}

const openMobileNavbar = () => {
    document.getElementById("mobile_navbar").style.width = "100%";
}

const closeMobileNavbar = () => {
    document.getElementById("mobile_navbar").style.width = "0%";
}


export default Navbar;