'use client';

import React from 'react';
import styles from './Logo.module.css';

interface LogoProps {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'admin';
    showText?: boolean;
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({
    size = 'md',
    variant = 'default',
    showText = true,
    className = ''
}) => {
    const sizeClass = styles[size] || styles.md;
    const variantClass = variant === 'admin' ? styles.admin : styles.default;

    return (
        <div className={`${styles.logo} ${className}`}>
            <div className={`${styles.icon} ${sizeClass} ${variantClass}`}>
                <span className={styles.text}>CD</span>
            </div>
            {showText && (
                <div className={styles.brandText}>
                    <span className={styles.brandName}>Carla Dinamarães</span>
                    <span className={`${styles.tagline} ${variant === 'admin' ? styles.taglineAdmin : styles.taglineDefault}`}>
                        {variant === 'admin' ? 'Admin Console' : 'Premium Spaces'}
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;
