'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import type { ButtonVariant, ButtonSize } from '@/types';
import styles from './ProButton.module.css';

interface ProButtonProps {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export const ProButton: React.FC<ProButtonProps> = ({
    children,
    onClick,
    variant = "primary",
    size = "md",
    className = "",
    disabled = false,
    type = "button"
}) => {
    const { isDarkMode } = useTheme();

    const variantClass = styles[variant] || styles.primary;
    const sizeClass = styles[size] || styles.md;
    const themeClass = isDarkMode ? styles.dark : styles.light;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${styles.button} ${variantClass} ${sizeClass} ${themeClass} ${className}`}
        >
            {children}
        </button>
    );
};

export default ProButton;
