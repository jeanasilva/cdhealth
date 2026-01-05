'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Logo } from '@/components/brand';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    const { isDarkMode } = useTheme();

    return (
        <footer className={`${styles.footer} ${isDarkMode ? styles.dark : styles.light}`}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <Logo />
                        <p className={styles.description}>
                            Infraestrutura flexível e tecnologia de ponta para profissionais de saúde
                            que buscam excelência sem amarras.
                        </p>
                    </div>

                    <div>
                        <h5 className={`${styles.columnTitle} ${isDarkMode ? styles.columnTitleDark : styles.columnTitleLight}`}>
                            Plataforma
                        </h5>
                        <ul className={styles.links}>
                            <li className={styles.linkItem}>Login</li>
                            <li className={styles.linkItem}>Planos</li>
                        </ul>
                    </div>

                    <div>
                        <h5 className={`${styles.columnTitle} ${isDarkMode ? styles.columnTitleDark : styles.columnTitleLight}`}>
                            Legal
                        </h5>
                        <ul className={styles.links}>
                            <li className={styles.linkItem}>Privacidade</li>
                            <li className={styles.linkItem}>Termos</li>
                        </ul>
                    </div>
                </div>

                <div className={`${styles.bottom} ${isDarkMode ? styles.bottomDark : styles.bottomLight}`}>
                    <p className={styles.copyright}>
                        © 2024 CARLA DINAMARÃES SPACES • ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
