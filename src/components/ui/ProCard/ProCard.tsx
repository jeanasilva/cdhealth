'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import styles from './ProCard.module.css';

interface ProCardProps {
    children: React.ReactNode;
    className?: string;
    noPadding?: boolean;
    onClick?: () => void;
}

export const ProCard: React.FC<ProCardProps> = ({
    children,
    className = "",
    noPadding = false,
    onClick
}) => {
    const { isDarkMode } = useTheme();

    return (
        <div
            className={`${styles.card} ${isDarkMode ? styles.dark : styles.light} ${className}`}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            <div className={noPadding ? '' : styles.content}>
                {children}
            </div>
        </div>
    );
};

export default ProCard;
