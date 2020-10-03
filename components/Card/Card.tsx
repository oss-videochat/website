import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    title: string,
    text: string
}

export const Card: React.FunctionComponent<CardProps> = ({title, text, children}) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardContent}>{text}</p>
            {children}
        </div>
    );
}
