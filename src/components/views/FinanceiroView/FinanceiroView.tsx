'use client';

import React from 'react';
import { CreditCard, Download } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { ProCard, ProButton, Badge } from '@/components/ui';
import { MOCK_FATURAS } from '@/data/mockData';
import type { ModalType } from '@/types';
import styles from './FinanceiroView.module.css';

interface FinanceiroViewProps {
    openModal: (modal: ModalType) => void;
}

export const FinanceiroView: React.FC<FinanceiroViewProps> = ({ openModal }) => {
    const { isDarkMode } = useTheme();
    const myFaturas = MOCK_FATURAS.filter(f => f.user === 'Dra. Maria Oliveira');

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div>
                    <h2 className={`${styles.title} ${isDarkMode ? styles.titleDark : styles.titleLight}`}>
                        Minhas Faturas
                    </h2>
                    <p className={styles.subtitle}>Gestão dos custos de locação</p>
                </div>
                <div className={styles.actions}>
                    <ProButton size="sm" onClick={() => openModal('pagamento')}>
                        <CreditCard size={14} /> Pagar Fatura
                    </ProButton>
                </div>
            </div>

            {/* Summary Cards */}
            <div className={styles.summaryGrid}>
                <ProCard className={styles.summaryCardGreen}>
                    <p className={styles.summaryLabel}>Total Consumido (Out)</p>
                    <p className={`${styles.summaryValue} ${isDarkMode ? styles.summaryValueDark : styles.summaryValueLight}`}>
                        R$ 1.250,50
                    </p>
                </ProCard>
                <ProCard className={styles.summaryCardAmber}>
                    <p className={`${styles.summaryLabel} ${styles.summaryLabelAmber}`}>Pendente de Pagamento</p>
                    <p className={`${styles.summaryValue} ${isDarkMode ? styles.summaryValueDark : styles.summaryValueLight}`}>
                        R$ 890,00
                    </p>
                </ProCard>
                <ProCard className={isDarkMode ? styles.summaryCardDark : styles.summaryCardLight}>
                    <p className={styles.summaryLabelGray}>Crédito Disponível</p>
                    <p className={`${styles.summaryValue} ${isDarkMode ? styles.summaryValueDark : styles.summaryValueLight}`}>
                        R$ 0,00
                    </p>
                    <button className={styles.rechargeLink}>Recarregar créditos</button>
                </ProCard>
            </div>

            {/* Table */}
            <ProCard noPadding>
                <div className={`${styles.tableHeader} ${isDarkMode ? styles.tableHeaderDark : styles.tableHeaderLight}`}>
                    <h3 className={`${styles.tableTitle} ${isDarkMode ? styles.tableTitleDark : styles.tableTitleLight}`}>
                        Extrato de Locação
                    </h3>
                </div>
                <table className={styles.table}>
                    <thead className={isDarkMode ? styles.theadDark : styles.theadLight}>
                        <tr>
                            <th>Competência</th>
                            <th>Status</th>
                            <th>Vencimento</th>
                            <th>Valor</th>
                            <th className={styles.textRight}>Comprovante</th>
                        </tr>
                    </thead>
                    <tbody className={isDarkMode ? styles.tbodyDark : styles.tbodyLight}>
                        {myFaturas.map(fatura => (
                            <tr key={fatura.id} className={styles.tableRow}>
                                <td className={styles.competenciaCell}>
                                    <p className={`${styles.competencia} ${isDarkMode ? styles.competenciaDark : styles.competenciaLight}`}>
                                        {fatura.mes}
                                    </p>
                                    <p className={styles.faturaId}>{fatura.id}</p>
                                </td>
                                <td>
                                    <Badge color={fatura.status === 'Paga' ? 'emerald' : fatura.status === 'Atrasada' ? 'red' : 'amber'}>
                                        {fatura.status}
                                    </Badge>
                                </td>
                                <td className={styles.dataCell}>{fatura.vencimento}</td>
                                <td className={`${styles.valorCell} ${isDarkMode ? styles.valorCellDark : styles.valorCellLight}`}>
                                    R$ {fatura.valor.toFixed(2)}
                                </td>
                                <td className={styles.textRight}>
                                    {fatura.status === 'Paga' ? (
                                        <button className={styles.downloadButton}>
                                            <Download size={16} />
                                        </button>
                                    ) : (
                                        <ProButton size="sm" onClick={() => openModal('pagamento')}>Pagar PIX</ProButton>
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

export default FinanceiroView;
