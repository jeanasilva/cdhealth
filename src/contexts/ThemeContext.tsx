'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { ThemeMode } from '@/types';

interface ThemeContextType {
    isDarkMode: boolean;
    theme: ThemeMode;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    isDarkMode: true,
    theme: 'dark',
    toggleTheme: () => { }
});

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeMode>('dark');

    useEffect(() => {
        // Check for saved preference or system preference
        const savedTheme = localStorage.getItem('cd-theme') as ThemeMode | null;
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('cd-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{
            isDarkMode: theme === 'dark',
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
