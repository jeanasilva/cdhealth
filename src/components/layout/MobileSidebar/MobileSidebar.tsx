'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X, LayoutDashboard, Calendar, Users, DollarSign, LogOut,
    BarChart3, UserCog, PieChart, TrendingUp, CalendarRange, CheckCircle2
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Logo } from '@/components/brand';
import type { User, PageType } from '@/types';
import styles from './MobileSidebar.module.css';

interface MobileSidebarProps {
    user: User;
    activePage: PageType;
    setPage: (page: PageType) => void;
    logout: () => void;
    isOpen: boolean;
    onToggle: () => void;
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({
    user,
    activePage,
    setPage,
    logout,
    isOpen,
    onToggle
}) => {
    const { isDarkMode } = useTheme();
    const isAdmin = user?.email === 'carla@cd.com';

    const handlePageChange = (page: PageType) => {
        setPage(page);
        onToggle(); // Fecha o menu ao selecionar
    };

    const handleLogout = () => {
        logout();
        onToggle();
    };

    const clientMenu = [
        { id: 'app' as PageType, label: 'Meu Dashboard', icon: LayoutDashboard },
        { id: 'app/reservar' as PageType, label: 'Reservar Sala', icon: Calendar },
        { id: 'app/pacientes' as PageType, label: 'Meus Pacientes', icon: Users },
        { id: 'app/financeiro' as PageType, label: 'Minhas Faturas', icon: DollarSign },
    ];

    const adminMenu = [
        { id: 'app/admin' as PageType, label: 'Dashboard Global', icon: BarChart3 },
        { id: 'app/admin/reservas' as PageType, label: 'Reservas Globais', icon: CalendarRange },
        { id: 'app/admin/clientes' as PageType, label: 'Gestão de Médicos', icon: UserCog },
        { id: 'app/admin/financeiro' as PageType, label: 'Auditoria Faturas', icon: PieChart },
        { id: 'app/admin/ocupacao' as PageType, label: 'Ocupação da Rede', icon: TrendingUp },
    ];

    const currentMenu = isAdmin ? adminMenu : clientMenu;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onToggle}
                        className={styles.overlay}
                    />

                    {/* Sidebar Drawer */}
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className={`${styles.sidebar} ${isDarkMode ? styles.sidebarDark : styles.sidebarLight}`}
                    >
                        {/* Header */}
                        <div className={styles.header}>
                            <Logo variant={isAdmin ? 'admin' : 'default'} />
                            <button onClick={onToggle} className={styles.closeButton}>
                                <X size={24} />
                            </button>
                        </div>

                        {/* Navigation */}
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
                                        onClick={() => handlePageChange(item.id)}
                                        className={`${styles.navItem} ${isActive
                                                ? (isAdmin ? styles.activeAdmin : styles.activeDefault)
                                                : (isDarkMode ? styles.inactiveDark : styles.inactiveLight)
                                            }`}
                                    >
                                        <Icon size={18} strokeWidth={isActive ? 3 : 2} />
                                        {item.label}
                                    </button>
                                );
                            })}
                        </nav>

                        {/* Footer */}
                        <div className={styles.footer}>
                            <div className={`${styles.planCard} ${isDarkMode ? styles.planDark : styles.planLight}`}>
                                <p className={`${styles.planLabel} ${isAdmin ? styles.planLabelAdmin : styles.planLabelDefault}`}>
                                    {isAdmin ? 'Status do Sistema' : 'Seu Plano Atual'}
                                </p>
                                <div className={styles.planInfo}>
                                    <span className={`${styles.planName} ${isDarkMode ? styles.planNameDark : styles.planNameLight}`}>
                                        {user?.plano}
                                    </span>
                                    <CheckCircle2 size={14} className={isAdmin ? styles.checkAdmin : styles.checkDefault} />
                                </div>
                            </div>

                            <button onClick={handleLogout} className={styles.logoutButton}>
                                <LogOut size={16} /> Sair
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileSidebar;
