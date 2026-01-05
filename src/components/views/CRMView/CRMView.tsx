'use client';

import React from 'react';
import { Search, Filter, UserPlus, Edit3, Trash2 } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { ProCard, ProButton, Badge } from '@/components/ui';
import { MOCK_PACIENTES } from '@/data/mockData';
import type { ModalType } from '@/types';
import styles from './CRMView.module.css';

interface CRMViewProps {
    openModal: (modal: ModalType) => void;
}

export const CRMView: React.FC<CRMViewProps> = ({ openModal }) => {
    const { isDarkMode } = useTheme();

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div>
                    <h2 className={`${styles.title} ${isDarkMode ? styles.titleDark : styles.titleLight}`}>
                        Meus Pacientes
                    </h2>
                    <p className={styles.subtitle}>Gestão da minha base de pacientes</p>
                </div>
                <ProButton size="sm" onClick={() => openModal('paciente')}>
                    <UserPlus size={14} /> Novo Cadastro
                </ProButton>
            </div>

            {/* Table Card */}
            <ProCard noPadding>
                {/* Search Header */}
                <div className={`${styles.searchHeader} ${isDarkMode ? styles.searchHeaderDark : styles.searchHeaderLight}`}>
                    <div className={styles.searchWrapper}>
                        <Search size={14} className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Localizar paciente por nome, CPF ou prontuário..."
                            className={`${styles.searchInput} ${isDarkMode ? styles.searchInputDark : styles.searchInputLight}`}
                        />
                    </div>
                    <ProButton variant="secondary" size="sm"><Filter size={16} /></ProButton>
                </div>

                {/* Table */}
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead className={isDarkMode ? styles.theadDark : styles.theadLight}>
                            <tr>
                                <th>Prontuário / Nome</th>
                                <th>Contacto Principal</th>
                                <th>Última Visita</th>
                                <th>Status Clínico</th>
                                <th className={styles.textRight}>Ações</th>
                            </tr>
                        </thead>
                        <tbody className={isDarkMode ? styles.tbodyDark : styles.tbodyLight}>
                            {MOCK_PACIENTES.map(paciente => (
                                <tr key={paciente.id} className={styles.tableRow}>
                                    <td className={styles.nameCell}>
                                        <p className={styles.prontuario}>{paciente.prontuario}</p>
                                        <p className={`${styles.pacienteName} ${isDarkMode ? styles.pacienteNameDark : styles.pacienteNameLight}`}>
                                            {paciente.nome}
                                        </p>
                                    </td>
                                    <td>
                                        <p className={`${styles.contato} ${isDarkMode ? styles.contatoDark : styles.contatoLight}`}>
                                            {paciente.contato}
                                        </p>
                                        <p className={styles.email}>{paciente.email}</p>
                                    </td>
                                    <td className={styles.dataCell}>{paciente.ultima}</td>
                                    <td>
                                        <Badge color={paciente.status === 'Alta' ? 'blue' : 'emerald'}>
                                            {paciente.status}
                                        </Badge>
                                    </td>
                                    <td className={styles.textRight}>
                                        <div className={styles.actionsCell}>
                                            <button className={styles.actionButton}>
                                                <Edit3 size={14} />
                                            </button>
                                            <button className={`${styles.actionButton} ${styles.deleteButton}`}>
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </ProCard>
        </div>
    );
};

export default CRMView;
