'use client';

import React from 'react';
import type { BadgeColor } from '@/types';
import styles from './Badge.module.css';

interface BadgeProps {
    children: React.ReactNode;
    color?: BadgeColor;
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    color = "emerald",
    className = ""
}) => {
    const colorClass = styles[color] || styles.emerald;

    return (
        <span className={`${styles.badge} ${colorClass} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
