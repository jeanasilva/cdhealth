'use client';

import React from 'react';
import { Smartphone, Shield, Globe } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { ProCard } from '@/components/ui';
import styles from './FeaturesSection.module.css';

const features = [
    {
        icon: Smartphone,
        title: "Booking Instantâneo",
        desc: "Reserve salas em segundos via app. Visualize disponibilidade em tempo real em toda a rede."
    },
    {
        icon: Shield,
        title: "Gestão Financeira",
        desc: "Controle faturas, emita recibos e receba pagamentos dos seus pacientes via PIX integrado."
    },
    {
        icon: Globe,
        title: "CRM Clínico",
        desc: "Histórico de pacientes, prontuário digital simplificado e alertas de retorno em um só lugar."
    }
];

export const FeaturesSection: React.FC = () => {
    const { isDarkMode } = useTheme();

    return (
        <section className={`${styles.features} ${isDarkMode ? styles.dark : styles.light}`}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={`${styles.title} ${isDarkMode ? styles.titleDark : styles.titleLight}`}>
                        Ecossistema Integrado
                    </h2>
                    <p className={styles.subtitle}>
                        Mais do que salas bonitas. Uma plataforma de gestão completa para impulsionar sua carreira.
                    </p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <ProCard key={index} className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    <Icon size={28} />
                                </div>
                                <h3 className={`${styles.cardTitle} ${isDarkMode ? styles.cardTitleDark : styles.cardTitleLight}`}>
                                    {feature.title}
                                </h3>
                                <p className={styles.cardDescription}>
                                    {feature.desc}
                                </p>
                            </ProCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
