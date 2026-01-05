'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Contexts
import { useTheme } from '@/contexts/ThemeContext';

// Types
import type { User, PageType, ModalType } from '@/types';

// Components
import {
  Sidebar,
  AppHeader,
  MobileSidebar
} from '@/components/layout';

import {
  LandingNav,
  HeroSection,
  FeaturesSection,
  SpacesSection,
  Footer
} from '@/components/landing';

import {
  LoginView,
  ClientDashboard,
  AdminDashboard,
  AdminReservationsView,
  AdminClientsView,
  AdminFinanceView,
  ReservasView,
  CRMView,
  FinanceiroView
} from '@/components/views';

import { Modal, ProButton } from '@/components/ui';
import { MOCK_PACIENTES, MOCK_SALAS, MOCK_CLIENTES } from '@/data/mockData';
import { QrCode, Copy, Activity } from 'lucide-react';

// Styles
import styles from './page.module.css';

export default function Home() {
  const { isDarkMode } = useTheme();
  const [page, setPage] = useState<PageType>('landing');
  const [user, setUser] = useState<User | null>(null);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auth handler
  const handleAuth = (email: string) => {
    const isCarla = email.includes('carla');
    setUser({
      nome: isCarla ? "Carla Dinamarães" : "Dra. Maria Oliveira",
      email: email,
      cargo: isCarla ? "Owner / Admin" : "Psicóloga Senior",
      plano: isCarla ? "System Admin" : "Pro Platinum"
    });
    setPage(isCarla ? 'app/admin' : 'app');
  };

  const logout = () => {
    setUser(null);
    setPage('landing');
  };

  const isAdmin = user?.email?.includes('carla');

  return (
    <div className={styles.app}>
      {/* Background Mesh */}
      <div className={styles.backgroundMesh}>
        <div className={`${styles.meshGreen} ${isDarkMode ? styles.meshGreenDark : styles.meshGreenLight}`} />
        <div className={`${styles.meshBlue} ${isDarkMode ? styles.meshBlueDark : styles.meshBlueLight}`} />
      </div>

      <AnimatePresence mode="wait">
        {/* LANDING PAGE */}
        {page === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.landingContainer}
          >
            <LandingNav setPage={setPage} />
            <HeroSection setPage={setPage} />
            <FeaturesSection />
            <SpacesSection />
            <Footer />
          </motion.div>
        )}

        {/* LOGIN PAGE */}
        {page === 'login' && (
          <LoginView
            key="login"
            setPage={setPage}
            onAuth={handleAuth}
          />
        )}

        {/* APP (Authenticated) */}
        {page.startsWith('app') && user && (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.appLayout}
          >
            <Sidebar
              user={user}
              activePage={page}
              setPage={setPage}
              logout={logout}
            />

            <main className={styles.mainContent}>
              <header className={`${styles.mobileHeader} ${isDarkMode ? styles.mobileHeaderDark : styles.mobileHeaderLight}`}>
                <MobileSidebar
                  user={user}
                  activePage={page}
                  setPage={setPage}
                  logout={logout}
                  isOpen={mobileMenuOpen}
                  onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
                />
                <AppHeader user={user} page={page} />
              </header>

              <div className={styles.pageContent}>
                <AnimatePresence mode="wait">
                  {/* Client Routes */}
                  {page === 'app' && !isAdmin && (
                    <motion.div key="client-dashboard" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <ClientDashboard user={user} setPage={setPage} />
                    </motion.div>
                  )}
                  {page === 'app/reservar' && !isAdmin && (
                    <motion.div key="reservas" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <ReservasView openModal={setActiveModal} />
                    </motion.div>
                  )}
                  {page === 'app/pacientes' && !isAdmin && (
                    <motion.div key="crm" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <CRMView openModal={setActiveModal} />
                    </motion.div>
                  )}
                  {page === 'app/financeiro' && !isAdmin && (
                    <motion.div key="financeiro" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <FinanceiroView openModal={setActiveModal} />
                    </motion.div>
                  )}

                  {/* Admin Routes */}
                  {page === 'app/admin' && isAdmin && (
                    <motion.div key="admin-dashboard" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <AdminDashboard />
                    </motion.div>
                  )}
                  {page === 'app/admin/reservas' && isAdmin && (
                    <motion.div key="admin-reservas" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <AdminReservationsView openModal={setActiveModal} />
                    </motion.div>
                  )}
                  {page === 'app/admin/clientes' && isAdmin && (
                    <motion.div key="admin-clientes" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <AdminClientsView />
                    </motion.div>
                  )}
                  {page === 'app/admin/financeiro' && isAdmin && (
                    <motion.div key="admin-financeiro" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <AdminFinanceView />
                    </motion.div>
                  )}
                  {page === 'app/admin/ocupacao' && isAdmin && (
                    <motion.div key="admin-ocupacao" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <div className={styles.placeholder}>
                        <h2 className={`${styles.placeholderTitle} ${isDarkMode ? styles.placeholderTitleDark : styles.placeholderTitleLight}`}>
                          Ocupação da Rede
                        </h2>
                        <p className={styles.placeholderText}>Heatmap de ocupação global em desenvolvimento</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODALS */}
      <Modal
        isOpen={activeModal === 'paciente'}
        onClose={() => setActiveModal(null)}
        title="Novo Registro Clínico"
      >
        <div className={styles.modalContent}>
          <div className={styles.modalGrid}>
            <div className={styles.modalField}>
              <label className={styles.modalLabel}>Nome Completo</label>
              <input
                type="text"
                className={`${styles.modalInput} ${isDarkMode ? styles.modalInputDark : styles.modalInputLight}`}
                placeholder="Ex: Ana Beatriz Silva"
              />
            </div>
            <div className={styles.modalField}>
              <label className={styles.modalLabel}>Documento / CPF</label>
              <input
                type="text"
                className={`${styles.modalInput} ${isDarkMode ? styles.modalInputDark : styles.modalInputLight}`}
                placeholder="000.000..."
              />
            </div>
          </div>
          <div className={styles.modalField}>
            <label className={styles.modalLabel}>E-mail de Contato</label>
            <input
              type="email"
              className={`${styles.modalInput} ${isDarkMode ? styles.modalInputDark : styles.modalInputLight}`}
              placeholder="ana@email.com"
            />
          </div>
          <ProButton className={styles.modalButton} onClick={() => setActiveModal(null)}>
            Salvar Registro
          </ProButton>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'reserva'}
        onClose={() => setActiveModal(null)}
        title="Confirmar Agendamento"
      >
        <div className={styles.modalContent}>
          <div className={`${styles.reservaSummary} ${isDarkMode ? styles.reservaSummaryDark : styles.reservaSummaryLight}`}>
            <div className={styles.reservaSummaryHeader}>
              <span className={styles.reservaSummaryLabel}>Resumo Operacional</span>
              <span className={`${styles.reservaSummaryPrice} ${isDarkMode ? styles.textWhite : styles.textDark}`}>R$ 60,00</span>
            </div>
            <p className={`${styles.reservaSummaryTitle} ${isDarkMode ? styles.textWhite : styles.textDark}`}>
              Suíte 101 - Psicologia
            </p>
            <p className={styles.reservaSummaryDate}>Hoje, 30 de Outubro às 11:00 AM</p>
          </div>
          <div className={styles.modalField}>
            <label className={styles.modalLabel}>Vincular Paciente (Opcional)</label>
            <select className={`${styles.modalSelect} ${isDarkMode ? styles.modalSelectDark : styles.modalSelectLight}`}>
              <option>Selecione da lista...</option>
              {MOCK_PACIENTES.map(p => <option key={p.id}>{p.nome}</option>)}
            </select>
          </div>
          <div className={styles.modalActions}>
            <ProButton variant="outline" className={styles.modalActionButton} onClick={() => setActiveModal(null)}>
              Cancelar
            </ProButton>
            <ProButton className={styles.modalActionButton} onClick={() => setActiveModal(null)}>
              Confirmar Slot
            </ProButton>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'reserva_admin'}
        onClose={() => setActiveModal(null)}
        title="Novo Agendamento Manual (Admin)"
      >
        <div className={styles.modalContent}>
          <div className={styles.modalField}>
            <label className={`${styles.modalLabel} ${styles.modalLabelPurple}`}>Médico Responsável</label>
            <select className={`${styles.modalSelect} ${isDarkMode ? styles.modalSelectDark : styles.modalSelectLight}`}>
              <option>Selecione o médico...</option>
              {MOCK_CLIENTES.map(c => <option key={c.id}>{c.nome}</option>)}
            </select>
          </div>
          <div className={styles.modalGrid}>
            <div className={styles.modalField}>
              <label className={`${styles.modalLabel} ${styles.modalLabelPurple}`}>Sala</label>
              <select className={`${styles.modalSelect} ${isDarkMode ? styles.modalSelectDark : styles.modalSelectLight}`}>
                {MOCK_SALAS.map(s => <option key={s.id}>{s.nome}</option>)}
              </select>
            </div>
            <div className={styles.modalField}>
              <label className={`${styles.modalLabel} ${styles.modalLabelPurple}`}>Horário</label>
              <input
                type="time"
                className={`${styles.modalInput} ${isDarkMode ? styles.modalInputDark : styles.modalInputLight}`}
              />
            </div>
          </div>
          <ProButton className={`${styles.modalButton} ${styles.modalButtonPurple}`} onClick={() => setActiveModal(null)}>
            Confirmar Agendamento
          </ProButton>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'pagamento'}
        onClose={() => setActiveModal(null)}
        title="Pagamento via PIX"
      >
        <div className={styles.paymentModal}>
          <div className={styles.qrCodeWrapper}>
            <QrCode size={136} className={styles.qrCode} />
          </div>
          <div className={styles.paymentInfo}>
            <p className={styles.paymentLabel}>Total Liquidado</p>
            <p className={`${styles.paymentValue} ${isDarkMode ? styles.textWhite : styles.textDark}`}>R$ 890,00</p>
          </div>
          <div className={`${styles.pixCode} ${isDarkMode ? styles.pixCodeDark : styles.pixCodeLight}`}>
            <p className={styles.pixCodeText}>00020101021226870014BR.GOV.BCB.PIX...</p>
            <Copy size={18} className={styles.pixCodeIcon} />
          </div>
          <div className={styles.paymentStatus}>
            <Activity size={16} />
            <span className={styles.paymentStatusText}>Aguardando Confirmação</span>
          </div>
          <ProButton variant="secondary" className={styles.modalFullButton} onClick={() => setActiveModal(null)}>
            Fechar
          </ProButton>
        </div>
      </Modal>

      {/* Footer Watermark */}
      <footer className={styles.watermark}>
        <p className={`${styles.watermarkText} ${isDarkMode ? styles.watermarkTextDark : styles.watermarkTextLight}`}>
          Carla Dinamarães Spaces • Operational Core v6.0.4
        </p>
      </footer>
    </div>
  );
}
