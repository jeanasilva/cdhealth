'use client';

import React from 'react';
import {
    CalendarCheck, DollarSign, Users, AlertCircle,
    UserPlus, Plus, Calendar
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { ProCard, ProButton, Badge } from '@/components/ui';
import type { User, PageType } from '@/types';
import styles from './ClientDashboard.module.css';

interface ClientDashboardProps {
    user: User;
    setPage: (page: PageType) => void;
}

const kpis = [
    { label: "Meus Atendimentos (Hoje)", val: "04", trend: "2 Confirmados", icon: CalendarCheck, color: "emerald" },
    { label: "Custo Sala (Mês)", val: "R$ 1.250", trend: "Plano Silver", icon: DollarSign, color: "blue" },
    { label: "Meus Pacientes", val: "124", trend: "Base Ativa", icon: Users, color: "purple" },
    { label: "Minha Fatura", val: "R$ 890", trend: "Venc. 05/11", icon: AlertCircle, color: "amber" }
];

const upcomingAppointments = [
    { time: "09:00", name: "Ana Beatriz Silva", room: "Suíte 101", status: "Confirmado", color: "emerald" as const },
    { time: "10:30", name: "Ricardo Mendes", room: "Cons. 102", status: "Aguardando", color: "blue" as const },
    { time: "14:00", name: "Juliana Duarte", room: "Suíte 101", status: "Pendente", color: "amber" as const },
];

export const ClientDashboard: React.FC<ClientDashboardProps> = ({ user, setPage }) => {
    const { isDarkMode } = useTheme();

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.statusBadge}>
                        <span className={styles.statusDot}></span>
                        <p className={styles.statusText}>Minha Clínica Digital</p>
                    </div>
                    <h2 className={`${styles.greeting} ${isDarkMode ? styles.greetingDark : styles.greetingLight}`}>
                        Olá, <span className={styles.greetingName}>{user?.nome.split(' ')[0]}</span>
                    </h2>
                    <p className={styles.subtitle}>Resumo dos seus atendimentos de hoje</p>
                </div>
                <div className={styles.actions}>
                    <ProButton variant="secondary" onClick={() => setPage('app/pacientes')}>
                        <UserPlus size={14} /> Novo Paciente
                    </ProButton>
                    <ProButton onClick={() => setPage('app/reservar')}>
                        <Plus size={14} strokeWidth={3} /> Nova Reserva
                    </ProButton>
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
                                <div className={styles.kpiTrend}>{kpi.trend}</div>
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
                {/* Agenda Table */}
                <div className={styles.agendaSection}>
                    <ProCard noPadding>
                        <div className={`${styles.tableHeader} ${isDarkMode ? styles.tableHeaderDark : styles.tableHeaderLight}`}>
                            <h3 className={`${styles.tableTitle} ${isDarkMode ? styles.tableTitleDark : styles.tableTitleLight}`}>
                                Minha Agenda (Próximos Slots)
                            </h3>
                            <button className={styles.viewAllLink}>Ver agenda completa</button>
                        </div>
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead className={isDarkMode ? styles.theadDark : styles.theadLight}>
                                    <tr>
                                        <th>Horário</th>
                                        <th>Paciente</th>
                                        <th>Sala Reservada</th>
                                        <th className={styles.textRight}>Status</th>
                                    </tr>
                                </thead>
                                <tbody className={isDarkMode ? styles.tbodyDark : styles.tbodyLight}>
                                    {upcomingAppointments.map((row, i) => (
                                        <tr key={i} className={styles.tableRow}>
                                            <td className={`${styles.timeCell} ${isDarkMode ? styles.timeCellDark : styles.timeCellLight}`}>
                                                {row.time}
                                            </td>
                                            <td>
                                                <p className={`${styles.patientName} ${isDarkMode ? styles.patientNameDark : styles.patientNameLight}`}>
                                                    {row.name}
                                                </p>
                                            </td>
                                            <td className={styles.roomCell}>{row.room}</td>
                                            <td className={styles.textRight}>
                                                <Badge color={row.color}>{row.status}</Badge>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </ProCard>
                </div>

                {/* Sidebar Cards */}
                <div className={styles.sideCards}>
                    <ProCard className={styles.quickBookCard}>
                        <div className={styles.quickBookHeader}>
                            <div className={styles.quickBookIcon}>
                                <Calendar size={24} />
                            </div>
                            <div className={styles.quickBookText}>
                                <p className={styles.quickBookLabel}>Reserva Rápida</p>
                                <p className={styles.quickBookTitle}>Escolher Slot</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setPage('app/reservar')}
                            className={styles.quickBookButton}
                        >
                            Ver Disponibilidade
                        </button>
                    </ProCard>

                    <ProCard className={styles.billCard}>
                        <div className={styles.billContent}>
                            <div className={styles.billIcon}>
                                <DollarSign size={18} />
                            </div>
                            <div className={styles.billText}>
                                <p className={`${styles.billTitle} ${isDarkMode ? styles.billTitleDark : styles.billTitleLight}`}>
                                    Faturas a Pagar
                                </p>
                                <p className={styles.billSubtitle}>1 Fatura Pendente (R$ 890)</p>
                            </div>
                        </div>
                    </ProCard>
                </div>
            </div>
        </div>
    );
};

export default ClientDashboard;
