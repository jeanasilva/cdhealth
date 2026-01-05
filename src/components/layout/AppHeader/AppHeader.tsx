'use client';

import React from 'react';
import { Bell } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { ThemeToggle } from '@/components/ui';
import type { User, PageType } from '@/types';
import styles from './AppHeader.module.css';

interface AppHeaderProps {
    user: User;
    page: PageType;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ user, page }) => {
    const { isDarkMode } = useTheme();
    const isAdmin = user?.email === 'carla@cd.com';

    const getPageName = (p: PageType): string => {
        const names: Record<PageType, string> = {
            'landing': 'Landing',
            'login': 'Login',
            'app': 'Dashboard',
            'app/reservar': 'Reservar',
            'app/pacientes': 'Pacientes',
            'app/financeiro': 'Financeiro',
            'app/admin': 'Admin',
            'app/admin/reservas': 'Reservas',
            'app/admin/clientes': 'Clientes',
            'app/admin/financeiro': 'Auditoria',
            'app/admin/ocupacao': 'Ocupação',
        };
        return names[p] || 'Dashboard';
    };

    return (
        <header className={`${styles.header} ${isDarkMode ? styles.dark : styles.light}`}>
            <div className={styles.breadcrumb}>
                <div className={`${styles.breadcrumbContent} ${isDarkMode ? styles.breadcrumbDark : styles.breadcrumbLight}`}>
                    <div className={`${styles.statusDot} ${isAdmin ? styles.statusAdmin : styles.statusDefault}`}></div>
                    <span className={styles.breadcrumbText}>
                        CD.Workstation / <span className={isDarkMode ? styles.pageNameDark : styles.pageNameLight}>
                            {getPageName(page)}
                        </span>
                    </span>
                </div>
            </div>

            <div className={styles.actions}>
                <ThemeToggle />

                <button className={styles.notificationButton}>
                    <Bell size={24} />
                    <div className={styles.notificationBadge}></div>
                </button>

                <div className={`${styles.divider} ${isDarkMode ? styles.dividerDark : styles.dividerLight}`}></div>

                <div className={styles.userInfo}>
                    <div className={styles.userText}>
                        <p className={`${styles.userName} ${isDarkMode ? styles.userNameDark : styles.userNameLight}`}>
                            {user.nome}
                        </p>
                        <p className={styles.userRole}>{user.cargo}</p>
                    </div>
                    <div className={`${styles.avatar} ${isAdmin ? styles.avatarAdmin : styles.avatarDefault}`}>
                        {user.nome.charAt(0)}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;
