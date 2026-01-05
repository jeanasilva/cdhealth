'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, PlayCircle } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { ProCard, ProButton } from '@/components/ui';
import type { PageType } from '@/types';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
    setPage: (page: PageType) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setPage }) => {
    const { isDarkMode } = useTheme();

    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.badge}
                >
                    <span className={styles.badgeDot}></span>
                    O Novo Padrão em Coworking Médico
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`${styles.title} ${isDarkMode ? styles.titleDark : styles.titleLight}`}
                >
                    Saúde de <br />
                    <span className={styles.titleGradient}>Alta Performance.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={styles.description}
                >
                    Elimine custos fixos e burocracia. Alugue consultórios premium por hora
                    e gerencie sua clínica através da nossa Workstation Pro.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={styles.actions}
                >
                    <ProButton size="lg" className={styles.primaryButton} onClick={() => setPage('login')}>
                        Acessar Workstation <ArrowUpRight size={16} strokeWidth={3} />
                    </ProButton>
                    <ProButton variant="secondary" size="lg" className={styles.secondaryButton}>
                        Ver Unidades <PlayCircle size={16} />
                    </ProButton>
                </motion.div>
            </div>

            <div className={styles.imageWrapper}>
                <div className={styles.imageGlow}></div>
                <ProCard className={styles.imageCard} noPadding>
                    <img
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200"
                        className={styles.image}
                        alt="Consultório Premium"
                    />
                </ProCard>
            </div>
        </section>
    );
};

export default HeroSection;
