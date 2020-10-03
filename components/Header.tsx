import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
    text: string
}

export const Header: React.FunctionComponent<HeaderProps> = ({text}) => {
    return (
        <h1 className={styles.bigWords}>{text}</h1>
    );
}
