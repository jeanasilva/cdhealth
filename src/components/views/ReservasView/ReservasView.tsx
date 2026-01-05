'use client';

import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { ProCard, ProButton, Badge } from '@/components/ui';
import { MOCK_SALAS } from '@/data/mockData';
import type { ModalType, Sala } from '@/types';
import styles from './ReservasView.module.css';

interface ReservasViewProps {
    openModal: (modal: ModalType) => void;
}

const horas = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

export const ReservasView: React.FC<ReservasViewProps> = ({ openModal }) => {
    const { isDarkMode } = useTheme();
    const [selectedSala, setSelectedSala] = useState<Sala>(MOCK_SALAS[0]);

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div>
                    <h2 className={`${styles.title} ${isDarkMode ? styles.titleDark : styles.titleLight}`}>
                        Reservar Sala
                    </h2>
                    <p className={styles.subtitle}>Escolha a unidade para seus atendimentos</p>
                </div>
                <div className={styles.actions}>
                    <input
                        type="date"
                        className={`${styles.dateInput} ${isDarkMode ? styles.dateInputDark : styles.dateInputLight}`}
                        defaultValue="2024-10-30"
                    />
                </div>
            </div>

            {/* Salas Grid */}
            <div className={styles.salasGrid}>
                {MOCK_SALAS.map(sala => (
                    <ProCard
                        key={sala.id}
                        noPadding
                        className={`${styles.salaCard} ${selectedSala.id === sala.id ? styles.salaCardSelected : ''}`}
                        onClick={() => setSelectedSala(sala)}
                    >
                        <img src={sala.img} className={styles.salaImage} alt={sala.nome} />
                        <div className={styles.salaContent}>
                            <div className={styles.salaHeader}>
                                <Badge color={sala.status === 'Livre' ? 'emerald' : 'red'}>{sala.status}</Badge>
                                <span className={styles.salaPrice}>R$ {sala.preco}/h</span>
                            </div>
                            <h4 className={`${styles.salaName} ${isDarkMode ? styles.salaNameDark : styles.salaNameLight}`}>
                                {sala.nome}
                            </h4>
                            <p className={styles.salaSub}>{sala.sub}</p>
                        </div>
                    </ProCard>
                ))}
            </div>

            {/* Horários */}
            <ProCard noPadding>
                <div className={`${styles.horariosHeader} ${isDarkMode ? styles.horariosHeaderDark : styles.horariosHeaderLight}`}>
                    <h3 className={`${styles.horariosTitle} ${isDarkMode ? styles.horariosTitleDark : styles.horariosTitleLight}`}>
                        Grades de Disponibilidade • {selectedSala.nome}
                    </h3>
                    <p className={styles.horariosSubtitle}>Selecione o horário desejado</p>
                </div>
                <div className={styles.horariosGrid}>
                    {horas.map(h => (
                        <button
                            key={h}
                            disabled={h === '09:00' || h === '14:00'}
                            onClick={() => openModal('reserva')}
                            className={`${styles.horarioButton} ${(h === '09:00' || h === '14:00')
                                    ? styles.horarioDisabled
                                    : (isDarkMode ? styles.horarioAvailableDark : styles.horarioAvailableLight)
                                }`}
                        >
                            {h}
                        </button>
                    ))}
                </div>
            </ProCard>
        </div>
    );
};

export default ReservasView;
