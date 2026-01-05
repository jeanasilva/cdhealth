'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import styles from './ThemeToggle.module.css';

export const ThemeToggle: React.FC = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`${styles.toggle} ${isDarkMode ? styles.dark : styles.light}`}
            title={isDarkMode ? "Mudar para Claro" : "Mudar para Escuro"}
            aria-label="Toggle theme"
        >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
};

export default ThemeToggle;
