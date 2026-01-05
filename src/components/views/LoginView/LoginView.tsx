'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Search, Shield, Stethoscope, ShieldCheck } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { ProCard, ProButton } from '@/components/ui';
import type { User, PageType } from '@/types';
import styles from './LoginView.module.css';

interface LoginViewProps {
    setPage: (page: PageType) => void;
    onAuth: (email: string) => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ setPage, onAuth }) => {
    const { isDarkMode } = useTheme();
    const [emailInput, setEmailInput] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (emailInput) onAuth(emailInput);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.container}
        >
            <ProCard className={styles.card}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <Lock size={28} />
                    </div>
                    <h3 className={`${styles.title} ${isDarkMode ? styles.titleDark : styles.titleLight}`}>
                        Login Workstation
                    </h3>
                    <p className={styles.subtitle}>Selecione seu perfil de acesso</p>
                </div>

                <form onSubmit={handleLogin} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Corporative ID (E-mail)</label>
                        <div className={`${styles.inputWrapper} ${isDarkMode ? styles.inputWrapperDark : styles.inputWrapperLight}`}>
                            <Search size={18} className={styles.inputIcon} />
                            <input
                                type="email"
                                value={emailInput}
                                onChange={e => setEmailInput(e.target.value)}
                                placeholder="Digite seu e-mail..."
                                className={`${styles.input} ${isDarkMode ? styles.inputDark : styles.inputLight}`}
                            />
                        </div>
                    </div>

                    <ProButton type="submit" className={styles.submitButton}>
                        Entrar
                    </ProButton>

                    {/* Quick Access Buttons for Demo */}
                    <div className={`${styles.demoButtons} ${isDarkMode ? styles.demoButtonsDark : styles.demoButtonsLight}`}>
                        <button
                            type="button"
                            onClick={() => onAuth('carla@cd.com')}
                            className={`${styles.demoButton} ${styles.demoButtonAdmin} ${isDarkMode ? styles.demoButtonDark : styles.demoButtonLight}`}
                        >
                            <Shield size={20} className={styles.demoIcon} />
                            <span className={styles.demoText}>Demo Admin</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => onAuth('maria@saude.com')}
                            className={`${styles.demoButton} ${styles.demoButtonClient} ${isDarkMode ? styles.demoButtonDark : styles.demoButtonLight}`}
                        >
                            <Stethoscope size={20} className={styles.demoIcon} />
                            <span className={styles.demoText}>Demo Médico</span>
                        </button>
                    </div>

                    <div className={styles.securityBadge}>
                        <ShieldCheck size={14} className={styles.securityIcon} />
                        <span className={styles.securityText}>Secure Connection Active</span>
                    </div>
                </form>

                <button onClick={() => setPage('landing')} className={styles.backLink}>
                    Voltar para Central
                </button>
            </ProCard>
        </motion.div>
    );
};

export default LoginView;
