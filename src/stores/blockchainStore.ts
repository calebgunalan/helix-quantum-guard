import { create } from 'zustand';

interface BlockchainToast {
  id: string;
  txHash: string;
  status: 'pending' | 'confirmed';
  blockNumber?: number;
  confirmationTime?: string;
}

interface BlockchainState {
  currentBlock: number;
  toasts: BlockchainToast[];
  submitTransaction: (description?: string) => Promise<{ txHash: string; blockNumber: number }>;
  dismissToast: (id: string) => void;
}

let toastCounter = 0;

export const useBlockchainStore = create<BlockchainState>((set, get) => ({
  currentBlock: 14856,
  toasts: [],
  submitTransaction: async () => {
    const id = `btx-${++toastCounter}`;
    const newBlock = get().currentBlock + 1;
    const txHash = `0x${Math.random().toString(16).slice(2, 14)}`;

    // Add pending toast
    set((s) => ({
      toasts: [...s.toasts, { id, txHash, status: 'pending' }],
    }));

    // After 2s, confirm
    await new Promise((r) => setTimeout(r, 2000));
    set((s) => ({
      currentBlock: newBlock,
      toasts: s.toasts.map((t) =>
        t.id === id ? { ...t, status: 'confirmed', blockNumber: newBlock, confirmationTime: '2.3s' } : t
      ),
    }));

    // Auto-dismiss after 4s
    setTimeout(() => {
      set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) }));
    }, 4000);

    return { txHash, blockNumber: newBlock };
  },
  dismissToast: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
}));
