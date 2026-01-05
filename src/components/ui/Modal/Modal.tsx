'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import styles from './Modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    children
}) => {
    const { isDarkMode } = useTheme();

    return (
        <AnimatePresence>
            {isOpen && (
                <div className={styles.overlay}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className={styles.backdrop}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className={`${styles.modal} ${isDarkMode ? styles.dark : styles.light}`}
                    >
                        <div className={`${styles.header} ${isDarkMode ? styles.headerDark : styles.headerLight}`}>
                            <h3 className={`${styles.title} ${isDarkMode ? styles.titleDark : styles.titleLight}`}>
                                {title}
                            </h3>
                            <button onClick={onClose} className={styles.closeButton}>
                                <X size={18} />
                            </button>
                        </div>
                        <div className={styles.content}>
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
