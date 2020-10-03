import React from 'react';
import styles from './CardStack.module.css';

export const CardStack: React.FunctionComponent = ({children}) => {
    return (
        <div className={styles.cardsStack}>
            {children}
        </div>
    );
}
