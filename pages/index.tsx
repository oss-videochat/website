import Head from 'next/head'
import {NavBar, NavBarPage} from "../components/NavBar";
import styles from './index.module.css';
import {Button} from "../components/Button";
import {MaxWidthContainer} from "../components/MaxWidthContainer";
import {Card} from "../components/Card/Card";
import React from "react";
import {CardStack} from "../components/Card/CardStack";

export default function Home() {
    return (
        <>
            <Head>
                <title>BitLink - Open Source Video Conferencing</title>
            </Head>
            <NavBar page={NavBarPage.HOME}/>
            <div className={styles.top}>
                <div className={styles.topContainer}>
                    <div className={styles.content}>
                        <h2 className={styles.bigWords}>A new open source video conference tool keeping you connected
                            when you
                            need it most.</h2>
                        <a href="https://app.bitlink.live">
                            <Button green={true}>Get Started</Button>
                        </a>
                    </div>
                    <div className={styles.skeletonWrapper}>
                        <img src="/assets/images/skeleton.png" className={styles.skeleton}/>
                    </div>
                </div>
            </div>
            <div className={styles.skeletonWrapperMobile}>
                <img src="/assets/images/skeleton.png" className={styles.skeleton}/>
            </div>
            <div className={styles.bottom}>
                <MaxWidthContainer width={"1300px"}>
                    <h2 className={styles.sectionTitle}>Features</h2>
                    <CardStack>
                        <Card
                            title={"No Download Needed"}
                            text={"BitLink can operate completely in the browser on both mobile and desktop devices. Click the button below to start using BitLink."}
                        >
                            <a href="https://app.bitlink.live">
                                <Button>Get Started</Button>
                            </a>
                        </Card>
                        <Card
                            title={"Robust Chat System"}
                            text={"BitLink has a robust integrated chat system. Participants can send messages individually or to the entire room. Participants can edit and delete messages. When a new participant joins, the entire chat history will be synced with their device."}
                        />
                        <Card
                            title={"Open Source"}
                            text={"BitLink is a fully open source program. You can view our code on GitHub by clicking the button below."}
                        >
                            <a href="https://github.com/oss-videochat" target="_blank">
                                <Button>GitHub</Button>
                            </a>
                        </Card>
                    </CardStack>
                </MaxWidthContainer>
            </div>
        </>
    )
}
