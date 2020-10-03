import React from 'react';
import styles from './MaxWidthContainer.module.css';

interface MaxWidthContainerProps {
    width?: string
}

export const MaxWidthContainer: React.FunctionComponent<MaxWidthContainerProps> = ({children, width = "1000px"}) => {
    return (
        <div style={{maxWidth: width}} className={styles.maxedWidthContainer}>{children}</div>
    );
}
