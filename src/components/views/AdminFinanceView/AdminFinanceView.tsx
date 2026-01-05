'use client';

import React from 'react';
import { Filter, Bell } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { ProCard, ProButton, Badge } from '@/components/ui';
import { MOCK_FATURAS } from '@/data/mockData';
import styles from './AdminFinanceView.module.css';

export const AdminFinanceView: React.FC = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div>
                    <h2 className={`${styles.title} ${isDarkMode ? styles.titleDark : styles.titleLight}`}>
                        Auditoria Financeira
                    </h2>
                    <p className={styles.subtitle}>Faturamento consolidado de todos os clientes</p>
                </div>
                <div className={styles.actions}>
                    <ProButton variant="outline" size="sm"><Filter size={14} /> Filtrar Inadimplentes</ProButton>
                </div>
            </div>

            {/* Summary Cards */}
            <div className={styles.summaryGrid}>
                <ProCard className={styles.summaryCardPurple}>
                    <p className={styles.summaryLabelPurple}>Faturamento (Out)</p>
                    <p className={`${styles.summaryValue} ${isDarkMode ? styles.summaryValueDark : styles.summaryValueLight}`}>
                        R$ 48.250
                    </p>
                </ProCard>
                <ProCard className={styles.summaryCardRed}>
                    <p className={styles.summaryLabelRed}>Total Inadimplente</p>
                    <p className={`${styles.summaryValue} ${isDarkMode ? styles.summaryValueDark : styles.summaryValueLight}`}>
                        R$ 2.100
                    </p>
                </ProCard>
                <ProCard className={isDarkMode ? styles.summaryCardDark : styles.summaryCardLight}>
                    <p className={styles.summaryLabelGray}>Total Clientes</p>
                    <p className={`${styles.summaryValue} ${isDarkMode ? styles.summaryValueDark : styles.summaryValueLight}`}>
                        142
                    </p>
                </ProCard>
            </div>

            {/* Table */}
            <ProCard noPadding>
                <div className={`${styles.tableHeader} ${isDarkMode ? styles.tableHeaderDark : styles.tableHeaderLight}`}>
                    <h3 className={`${styles.tableTitle} ${isDarkMode ? styles.tableTitleDark : styles.tableTitleLight}`}>
                        Extrato de Faturas (Rede)
                    </h3>
                </div>
                <table className={styles.table}>
                    <thead className={isDarkMode ? styles.theadDark : styles.theadLight}>
                        <tr>
                            <th>ID Fatura</th>
                            <th>Cliente (Médico)</th>
                            <th>Vencimento</th>
                            <th>Valor</th>
                            <th>Status</th>
                            <th className={styles.textRight}>Notificar</th>
                        </tr>
                    </thead>
                    <tbody className={isDarkMode ? styles.tbodyDark : styles.tbodyLight}>
                        {MOCK_FATURAS.map(fatura => (
                            <tr key={fatura.id} className={styles.tableRow}>
                                <td className={styles.faturaId}>{fatura.id}</td>
                                <td className={`${styles.clientName} ${isDarkMode ? styles.clientNameDark : styles.clientNameLight}`}>
                                    {fatura.user}
                                </td>
                                <td className={styles.dataCell}>{fatura.vencimento}</td>
                                <td className={`${styles.valorCell} ${isDarkMode ? styles.valorCellDark : styles.valorCellLight}`}>
                                    R$ {fatura.valor.toFixed(2)}
                                </td>
                                <td>
                                    <Badge color={
                                        fatura.status === 'Paga' ? 'emerald' :
                                            fatura.status === 'Atrasada' ? 'red' : 'amber'
                                    }>
                                        {fatura.status}
                                    </Badge>
                                </td>
                                <td className={styles.textRight}>
                                    {fatura.status === 'Atrasada' && (
                                        <button className={styles.notifyButton}><Bell size={16} /></button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ProCard>
        </div>
    );
};

export default AdminFinanceView;
