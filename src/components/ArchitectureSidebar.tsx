import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const architectureNodes = [
  { id: 'auth', label: 'Patient / Staff Device', y: 0 },
  { id: 'quantum', label: 'Quantum-Safe Auth Layer', y: 1 },
  { id: 'smart', label: 'Smart Contract RBAC Engine', y: 2 },
  { id: 'blockchain', label: 'Permissioned Blockchain Ledger', y: 3 },
  { id: 'ehr', label: 'Hospital EHR / Resource', y: 4 },
];

const routeHighlight: Record<string, string> = {
  '/patient': 'auth',
  '/staff': 'smart',
  '/moderator': 'smart',
  '/admin': 'blockchain',
};

export function ArchitectureSidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const highlighted = routeHighlight[location.pathname] || '';

  if (location.pathname === '/') return null;

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="fixed right-4 top-20 z-30 gap-2 shadow-lg bg-card"
      >
        <Building2 className="h-4 w-4" />
        <span className="hidden sm:inline">Architecture</span>
      </Button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-foreground"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-80 bg-card border-l shadow-2xl p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">System Architecture</h3>
                <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mb-6">
                The highlighted component indicates which layer this page demonstrates.
              </p>

              <div className="flex flex-col items-center gap-0">
                {architectureNodes.map((node, i) => (
                  <div key={node.id} className="flex flex-col items-center">
                    <motion.div
                      animate={highlighted === node.id ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className={`w-full px-4 py-3 rounded-lg text-center text-sm font-medium border-2 transition-all ${
                        highlighted === node.id
                          ? 'bg-primary/10 border-primary text-primary shadow-lg shadow-primary/20'
                          : 'bg-muted/50 border-border text-muted-foreground'
                      }`}
                    >
                      {node.label}
                    </motion.div>
                    {i < architectureNodes.length - 1 && (
                      <div className={`w-0.5 h-6 ${highlighted === node.id || highlighted === architectureNodes[i + 1]?.id ? 'bg-primary' : 'bg-border'}`} />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-lg bg-muted/50 text-xs text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground mb-2">How It Works</p>
                <p>Each layer processes and validates requests cryptographically before passing them to the next. The blockchain ledger ensures every action is immutable and auditable.</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
