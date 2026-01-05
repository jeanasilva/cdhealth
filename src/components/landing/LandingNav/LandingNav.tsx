'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Logo } from '@/components/brand';
import { ProButton, ThemeToggle } from '@/components/ui';
import type { PageType } from '@/types';
import styles from './LandingNav.module.css';

interface LandingNavProps {
    setPage: (page: PageType) => void;
}

export const LandingNav: React.FC<LandingNavProps> = ({ setPage }) => {
    const { isDarkMode } = useTheme();

    const navItems = ['Unidades', 'Tecnologia', 'Planos', 'Contato'];

    return (
        <nav className={`${styles.nav} ${isDarkMode ? styles.dark : styles.light}`}>
            <Logo />

            <div className={styles.links}>
                {navItems.map(item => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className={`${styles.link} ${isDarkMode ? styles.linkDark : styles.linkLight}`}
                    >
                        {item}
                    </a>
                ))}
            </div>

            <div className={styles.actions}>
                <ThemeToggle />
                <ProButton variant="outline" size="sm" onClick={() => setPage('login')}>
                    Login
                </ProButton>
                <ProButton size="sm" onClick={() => setPage('login')}>
                    Começar
                </ProButton>
            </div>
        </nav>
    );
};

export default LandingNav;
