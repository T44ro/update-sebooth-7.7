import { motion, AnimatePresence } from 'framer-motion'
import styles from './ConfirmBackHomeModal.module.css'

interface ConfirmBackHomeModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
}

export function ConfirmBackHomeModal({ isOpen, onClose, onConfirm }: ConfirmBackHomeModalProps): JSX.Element | null {
    if (!isOpen) return null

    const handleConfirm = () => {
        onConfirm()
        onClose()
    }

    return (
        <AnimatePresence>
            <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className={styles.modal}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    onClick={e => e.stopPropagation()}
                >
                    <button className={styles.closeBtn} onClick={onClose}>
                        ×
                    </button>

                    <h2 className={styles.title}>⚠️ Kembali ke Beranda?</h2>
                    <p className={styles.subtitle}>
                        Sesi Anda saat ini akan dibatalkan. Apakah Anda yakin ingin kembali ke beranda?
                    </p>

                    <div className={styles.actions}>
                        <button
                            className={styles.cancelBtn}
                            onClick={onClose}
                        >
                            Tidak, Lanjutkan
                        </button>
                        <button
                            className={styles.confirmBtn}
                            onClick={handleConfirm}
                        >
                            Ya, Kembali Ke Beranda
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
