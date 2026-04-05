// Shared animation configuration values
export const SPRING_GENTLE = { type: 'spring' as const, stiffness: 100, damping: 20 };
export const SPRING_SNAPPY = { type: 'spring' as const, stiffness: 300, damping: 25 };
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];
export const STAGGER_CHILDREN = { staggerChildren: 0.07, delayChildren: 0.2 };

export const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
};

export const titleVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

export const decorVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay: 0.4 },
  },
};
