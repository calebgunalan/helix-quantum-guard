import { AnimatePresence, motion } from 'framer-motion';
import { useBlockchainStore } from '@/stores/blockchainStore';
import { Link2, CheckCircle2, Loader2 } from 'lucide-react';

export function BlockchainToasts() {
  const toasts = useBlockchainStore((s) => s.toasts);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="glass-card rounded-lg p-3 shadow-xl border border-border"
          >
            {t.status === 'pending' ? (
              <div className="flex items-center gap-2 text-sm">
                <Loader2 className="h-4 w-4 animate-spin text-warning" />
                <span className="text-muted-foreground">⛓ TX Submitted |</span>
                <code className="font-mono text-xs text-foreground">{t.txHash.slice(0, 10)}...</code>
                <span className="text-warning font-medium">Pending</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span className="text-success font-medium">✓ Confirmed</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-muted-foreground">Block #{t.blockNumber?.toLocaleString()}</span>
                <span className="text-muted-foreground">| {t.confirmationTime}</span>
              </div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
