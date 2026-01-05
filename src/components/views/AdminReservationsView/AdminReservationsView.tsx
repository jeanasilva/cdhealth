'use client';

import React from 'react';
import { Download, Plus, Edit3 } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { ProCard, ProButton, Badge } from '@/components/ui';
import { MOCK_RESERVAS_GLOBAL } from '@/data/mockData';
import type { ModalType } from '@/types';
import styles from './AdminReservationsView.module.css';

interface AdminReservationsViewProps {
    openModal: (modal: ModalType) => void;
}

export const AdminReservationsView: React.FC<AdminReservationsViewProps> = ({ openModal }) => {
    const { isDarkMode } = useTheme();

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div>
                    <h2 className={`${styles.title} ${isDarkMode ? styles.titleDark : styles.titleLight}`}>
                        Reservas Globais
                    </h2>
                    <p className={styles.subtitle}>Controle de agendamentos de toda a rede</p>
                </div>
                <div className={styles.actions}>
                    <ProButton variant="outline" size="sm"><Download size={14} /> Relatório</ProButton>
                    <ProButton size="sm" onClick={() => openModal('reserva_admin')} className={styles.adminButton}>
                        <Plus size={14} /> Nova Reserva Manual
                    </ProButton>
                </div>
            </div>

            {/* Table */}
            <ProCard noPadding>
                <div className={`${styles.tableHeader} ${isDarkMode ? styles.tableHeaderDark : styles.tableHeaderLight}`}>
                    <h3 className={`${styles.tableTitle} ${isDarkMode ? styles.tableTitleDark : styles.tableTitleLight}`}>
                        Agenda Consolidada
                    </h3>
                    <div className={styles.tableActions}>
                        <input
                            type="date"
                            className={`${styles.dateInput} ${isDarkMode ? styles.dateInputDark : styles.dateInputLight}`}
                            defaultValue="2024-10-30"
                        />
                    </div>
                </div>
                <table className={styles.table}>
                    <thead className={isDarkMode ? styles.theadDark : styles.theadLight}>
                        <tr>
                            <th>Horário</th>
                            <th>Médico (Cliente)</th>
                            <th>Sala Reservada</th>
                            <th>Valor Hora</th>
                            <th>Status</th>
                            <th className={styles.textRight}>Ações</th>
                        </tr>
                    </thead>
                    <tbody className={isDarkMode ? styles.tbodyDark : styles.tbodyLight}>
                        {MOCK_RESERVAS_GLOBAL.map(reserva => (
                            <tr key={reserva.id} className={styles.tableRow}>
                                <td className={`${styles.timeCell} ${isDarkMode ? styles.timeCellDark : styles.timeCellLight}`}>
                                    {reserva.time} <span className={styles.dateSpan}>({reserva.date})</span>
                                </td>
                                <td className={styles.doctorCell}>{reserva.doctor}</td>
                                <td className={styles.roomCell}>{reserva.room}</td>
                                <td className={styles.valueCell}>R$ {reserva.value.toFixed(2)}</td>
                                <td>
                                    <Badge color={
                                        reserva.status === 'Confirmada' ? 'emerald' :
                                            reserva.status === 'Check-in' ? 'blue' : 'amber'
                                    }>
                                        {reserva.status}
                                    </Badge>
                                </td>
                                <td className={styles.textRight}>
                                    <button className={styles.editButton}><Edit3 size={16} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ProCard>
        </div>
    );
};

export default AdminReservationsView;
