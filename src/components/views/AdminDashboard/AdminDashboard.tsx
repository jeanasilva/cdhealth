'use client';

import React from 'react';
import {
    DollarSign, Activity, UserCog, AlertCircle, ArrowUpRight
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { ProCard, Badge } from '@/components/ui';
import { MOCK_SALAS } from '@/data/mockData';
import styles from './AdminDashboard.module.css';

const kpis = [
    { label: "Receita Recorrente", val: "R$ 48.250", icon: DollarSign, color: "emerald", trend: "+15%" },
    { label: "Ocupação Média", val: "84%", icon: Activity, color: "blue", trend: "+5%" },
    { label: "Clientes (Médicos)", val: "142", icon: UserCog, color: "purple", trend: "+8 novos" },
    { label: "Inadimplência", val: "3.2%", icon: AlertCircle, color: "red", trend: "-1%" }
];

const alerts = [
    { msg: "Dr. João Pedro: Fatura Setembro em atraso (5 dias)", type: "finance", urgency: "high" },
    { msg: "Unidade Itaim: Manutenção de Ar-condicionado solicitada", type: "ops", urgency: "med" },
    { msg: "Dra. Fernanda Lima: Upgrade de plano para Gold", type: "user", urgency: "low" }
];

export const AdminDashboard: React.FC = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div>
                    <p className={styles.subtitle}>Visão Geral da Rede</p>
                    <h2 className={`${styles.title} ${isDarkMode ? styles.titleDark : styles.titleLight}`}>
                        Dashboard <span className={styles.titleAccent}>Admin</span>
                    </h2>
                </div>
                <div className={styles.badges}>
                    <Badge color="purple">Modo Supervisor</Badge>
                    <Badge color="purple">Rede: 4 Unidades</Badge>
                </div>
            </div>

            {/* KPIs */}
            <div className={styles.kpis}>
                {kpis.map((kpi, index) => {
                    const Icon = kpi.icon;
                    return (
                        <ProCard key={index} className={styles.kpiCard}>
                            <div className={styles.kpiHeader}>
                                <div className={`${styles.kpiIcon} ${styles[`kpiIcon${kpi.color}`]}`}>
                                    <Icon size={20} />
                                </div>
                                <span className={styles.kpiTrend}>{kpi.trend}</span>
                            </div>
                            <p className={styles.kpiLabel}>{kpi.label}</p>
                            <p className={`${styles.kpiValue} ${isDarkMode ? styles.kpiValueDark : styles.kpiValueLight}`}>
                                {kpi.val}
                            </p>
                        </ProCard>
                    );
                })}
            </div>

            {/* Main Content */}
            <div className={styles.mainContent}>
                {/* Ocupação das Salas */}
                <ProCard noPadding className={styles.occupancyCard}>
                    <div className={`${styles.cardHeader} ${isDarkMode ? styles.cardHeaderDark : styles.cardHeaderLight}`}>
                        <h3 className={`${styles.cardTitle} ${isDarkMode ? styles.cardTitleDark : styles.cardTitleLight}`}>
                            Ocupação das Salas (Tempo Real)
                        </h3>
                        <div className={styles.liveIndicator}>
                            <span className={styles.liveDot}></span>
                            <span className={styles.liveText}>Live</span>
                        </div>
                    </div>
                    <div className={styles.occupancyGrid}>
                        {MOCK_SALAS.map(sala => (
                            <div
                                key={sala.id}
                                className={`${styles.occupancyItem} ${sala.status === 'Livre'
                                        ? (isDarkMode ? styles.occupancyItemDark : styles.occupancyItemLight)
                                        : styles.occupancyItemOccupied
                                    }`}
                            >
                                <p className={styles.occupancyName}>{sala.nome}</p>
                                <p className={`${styles.occupancyValue} ${sala.status === 'Livre'
                                        ? (isDarkMode ? styles.occupancyValueDark : styles.occupancyValueLight)
                                        : styles.occupancyValueOccupied
                                    }`}>
                                    {sala.status === 'Livre' ? '0%' : '100%'}
                                </p>
                                <p className={styles.occupancyStatus}>
                                    {sala.status === 'Livre' ? 'Disponível' : 'Em uso'}
                                </p>
                            </div>
                        ))}
                    </div>
                </ProCard>

                {/* Alertas */}
                <ProCard>
                    <h3 className={`${styles.cardTitle} ${isDarkMode ? styles.cardTitleDark : styles.cardTitleLight}`} style={{ marginBottom: '1.5rem' }}>
                        Alertas da Rede
                    </h3>
                    <div className={styles.alerts}>
                        {alerts.map((alert, i) => (
                            <div
                                key={i}
                                className={`${styles.alertItem} ${isDarkMode ? styles.alertItemDark : styles.alertItemLight}`}
                            >
                                <div className={`${styles.alertDot} ${styles[`alertDot${alert.urgency}`]}`}></div>
                                <p className={styles.alertMsg}>{alert.msg}</p>
                                <ArrowUpRight size={14} className={styles.alertArrow} />
                            </div>
                        ))}
                    </div>
                </ProCard>
            </div>
        </div>
    );
};

export default AdminDashboard;
