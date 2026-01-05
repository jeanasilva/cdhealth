'use client';

import React from 'react';
import { Download, MoreHorizontal } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { ProCard, ProButton, Badge } from '@/components/ui';
import { MOCK_CLIENTES } from '@/data/mockData';
import styles from './AdminClientsView.module.css';

export const AdminClientsView: React.FC = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div>
                    <h2 className={`${styles.title} ${isDarkMode ? styles.titleDark : styles.titleLight}`}>
                        Gestão de Médicos
                    </h2>
                    <p className={styles.subtitle}>Profissionais que alugam salas na rede</p>
                </div>
                <ProButton size="sm"><Download size={14} /> Exportar Lista</ProButton>
            </div>

            {/* Table */}
            <ProCard noPadding>
                <table className={styles.table}>
                    <thead className={isDarkMode ? styles.theadDark : styles.theadLight}>
                        <tr>
                            <th>Médico / Cliente</th>
                            <th>Unidade Principal</th>
                            <th>Plano Contratado</th>
                            <th>Receita Gerada</th>
                            <th>Status Financeiro</th>
                            <th className={styles.textRight}>Ações</th>
                        </tr>
                    </thead>
                    <tbody className={isDarkMode ? styles.tbodyDark : styles.tbodyLight}>
                        {MOCK_CLIENTES.map(cliente => (
                            <tr key={cliente.id} className={styles.tableRow}>
                                <td className={styles.nameCell}>
                                    <p className={`${styles.clientName} ${isDarkMode ? styles.clientNameDark : styles.clientNameLight}`}>
                                        {cliente.nome}
                                    </p>
                                    <p className={styles.clientEmail}>{cliente.email}</p>
                                </td>
                                <td className={styles.unidadeCell}>{cliente.unidade}</td>
                                <td className={styles.planoCell}>{cliente.plano}</td>
                                <td className={styles.receitaCell}>R$ {cliente.receita.toFixed(2)}</td>
                                <td>
                                    <Badge color={
                                        cliente.status === 'Ativo' ? 'emerald' :
                                            cliente.status === 'Inadimplente' ? 'red' : 'amber'
                                    }>
                                        {cliente.status}
                                    </Badge>
                                </td>
                                <td className={styles.textRight}>
                                    <button className={styles.moreButton}><MoreHorizontal size={18} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ProCard>
        </div>
    );
};

export default AdminClientsView;
