import Head from 'next/head'
import {NavBar, NavBarPage} from "../components/NavBar";
import styles from './about.module.css';
import {MaxWidthContainer} from "../components/MaxWidthContainer";
import React from "react";

export default function About() {
    return (
        <>
            <Head>
                <title>About BitLink - Open Source Video Conferencing</title>
            </Head>
            <NavBar page={NavBarPage.ABOUT}/>
            <div className={styles.top}>
                <div className={styles.content}>
                    <h1>About</h1>
                </div>
            </div>
            <div className={styles.bottom}>
                <MaxWidthContainer>
                    <h2>About</h2>
                    <p>BitLink is an open source video conferencing program. It runs completely in browser on both mobile and desktop devices meaning no download or setup is necessary.</p>
                    <h2>BitLink {">"} Zoom</h2>
                    <ul>
                        <li>BitLink is open source</li>
                        <li>BitLink is more performant than Zoom</li>
                    </ul>
                    <h2>BitLink {">"} Jitsi</h2>
                    <ul>
                        <li>BitLink is more performant than Jitsi</li>
                        <li>Supports virtual background</li>
                        <li>Virtual background and background blur work in nearly real time in BitLink while lagging in Jitsi</li>
                        <li>Less bloated</li>
                    </ul>
                    <h2>Creator</h2>
                    <h3>Josh Brown</h3>
                    <p>My name is Josh Brown. I'm a 17 year old High School student. Check my website out <a target="_blank" href="https://joshbrown.info">here</a>. </p>
                </MaxWidthContainer>
            </div>
        </>
    )
}
