import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './NavBar.module.css';

export enum NavBarPage {
    HOME,
    ABOUT,
    PRIVACY
}

interface NavBarProps {
    page: NavBarPage
}

export const NavBar: React.FunctionComponent<NavBarProps> = ({page}) => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function scroll(e: Event) {
            setScrolled((e.currentTarget as Window).scrollY > 50)
        }
        window.addEventListener("scroll", scroll);
        return () => window.removeEventListener("scroll", scroll);
    })

    return (
        <>
            <div className={styles.alertMessage}>BitLink has been shutdown as of 4/11/21. You can access the archived repository at <a href={"https://github.com/oss-videochat/bitlink"}>https://github.com/oss-videochat/bitlink.</a></div>
            <div className={cn(styles.topBar, {[styles.scrolled]: scrolled})}>
                <div className={styles.topWrapper}>
                    <a href="/"><img className={styles.logo} src="/assets/images/bitlinklogo-alt.svg"/></a>
                    <div onClick={() => setOpen(!open)} className={styles.hamburgerWrapper}><FontAwesomeIcon icon={faBars}/></div>
                    <nav className={cn(styles.topNav, {[styles.active]: open})}>
                        <ul>
                            <li className={page === NavBarPage.HOME ? styles.active : ""}><Link
                                href={"/"}><a>Home</a></Link></li>
                            <li><a href="https://app.bitlink.live/create">Create Room</a></li>
                            <li><a href="https://app.bitlink.live/join">Join Room</a></li>
                            <li className={page === NavBarPage.ABOUT ? styles.active : ""}><Link
                                href={"/about"}><a>About</a></Link></li>
                            <li className={page === NavBarPage.PRIVACY ? styles.active : ""}><Link
                                href={"/privacy"}><a>Privacy</a></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
