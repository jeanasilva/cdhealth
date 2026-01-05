'use client';

import React from 'react';
import {
    LayoutDashboard, Calendar, Users, DollarSign, LogOut,
    CheckCircle2, BarChart3, UserCog, PieChart, TrendingUp, CalendarRange,
    Shield
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Logo } from '@/components/brand';
import type { User, PageType } from '@/types';
import styles from './Sidebar.module.css';

interface SidebarProps {
    user: User;
    activePage: PageType;
    setPage: (page: PageType) => void;
    logout: () => void;
}

interface MenuItem {
    id: PageType;
    label: string;
    icon: React.ElementType;
}

export const Sidebar: React.FC<SidebarProps> = ({
    user,
    activePage,
    setPage,
    logout
}) => {
    const { isDarkMode } = useTheme();
    const isAdmin = user?.email === 'carla@cd.com';

    const clientMenu: MenuItem[] = [
        { id: 'app', label: 'Meu Dashboard', icon: LayoutDashboard },
        { id: 'app/reservar', label: 'Reservar Sala', icon: Calendar },
        { id: 'app/pacientes', label: 'Meus Pacientes', icon: Users },
        { id: 'app/financeiro', label: 'Minhas Faturas', icon: DollarSign },
    ];

    const adminMenu: MenuItem[] = [
        { id: 'app/admin', label: 'Dashboard Global', icon: BarChart3 },
        { id: 'app/admin/reservas', label: 'Reservas Globais', icon: CalendarRange },
        { id: 'app/admin/clientes', label: 'Gestão de Médicos', icon: UserCog },
        { id: 'app/admin/financeiro', label: 'Auditoria Faturas', icon: PieChart },
        { id: 'app/admin/ocupacao', label: 'Ocupação da Rede', icon: TrendingUp },
    ];

    const currentMenu = isAdmin ? adminMenu : clientMenu;

    return (
        <div className={`${styles.sidebar} ${isDarkMode ? styles.dark : styles.light}`}>
            <div className={styles.header}>
                <Logo variant={isAdmin ? 'admin' : 'default'} />
            </div>

            <nav className={styles.nav}>
                <p className={styles.navLabel}>
                    {isAdmin ? 'Gestão da Rede' : 'Terminal Operacional'}
                </p>
                {currentMenu.map(item => {
                    const Icon = item.icon;
                    const isActive = activePage === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => setPage(item.id)}
                            className={`${styles.navItem} ${isActive
                                    ? (isAdmin ? styles.activeAdmin : styles.activeDefault)
                                    : (isDarkMode ? styles.inactiveDark : styles.inactiveLight)
                                }`}
                        >
                            <Icon size={16} strokeWidth={isActive ? 3 : 2} />
                            {item.label}
                        </button>
                    );
                })}
            </nav>

            <div className={styles.footer}>
                <div className={`${styles.planCard} ${isDarkMode ? styles.planDark : styles.planLight}`}>
                    <p className={`${styles.planLabel} ${isAdmin ? styles.planLabelAdmin : styles.planLabelDefault}`}>
                        {isAdmin ? 'Status do Sistema' : 'Seu Plano Atual'}
                    </p>
                    <div className={styles.planInfo}>
                        <span className={`${styles.planName} ${isDarkMode ? styles.planNameDark : styles.planNameLight}`}>
                            {user?.plano}
                        </span>
                        <CheckCircle2 size={12} className={isAdmin ? styles.checkAdmin : styles.checkDefault} />
                    </div>
                </div>

                <button onClick={logout} className={styles.logoutButton}>
                    <LogOut size={14} /> Sair
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
