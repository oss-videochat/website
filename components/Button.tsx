import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

interface ButtonProps {
    green?: boolean,
}

export const Button: React.FunctionComponent<ButtonProps> = ({green = false, children}) => {
    return (
        <button className={cn(styles.button, {[styles.green]: green})}>{children}</button>
    );
}
