'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { ProCard, ProButton } from '@/components/ui';
import { MOCK_SALAS } from '@/data/mockData';
import styles from './SpacesSection.module.css';

export const SpacesSection: React.FC = () => {
    const { isDarkMode } = useTheme();

    return (
        <section className={styles.spaces}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <p className={styles.label}>Nossas Unidades</p>
                        <h2 className={`${styles.title} ${isDarkMode ? styles.titleDark : styles.titleLight}`}>
                            Espaços Premium
                        </h2>
                    </div>
                    <ProButton variant="outline">Ver todas as unidades</ProButton>
                </div>

                <div className={styles.grid}>
                    {MOCK_SALAS.slice(0, 3).map((sala) => (
                        <ProCard key={sala.id} noPadding className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={sala.img} className={styles.image} alt={sala.nome} />
                                <div className={styles.priceTag}>
                                    <p className={styles.price}>R$ {sala.preco}/h</p>
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <h4 className={`${styles.cardTitle} ${isDarkMode ? styles.cardTitleDark : styles.cardTitleLight}`}>
                                    {sala.nome}
                                </h4>
                                <p className={styles.cardSubtitle}>{sala.sub}</p>
                                <div className={styles.tags}>
                                    {sala.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className={`${styles.tag} ${isDarkMode ? styles.tagDark : styles.tagLight}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ProCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpacesSection;
