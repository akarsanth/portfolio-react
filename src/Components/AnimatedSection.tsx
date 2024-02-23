import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  css: string;
  side?: string;
}

type AnimationConfig = {
  [key: string]: {
    initial: { opacity: number; x?: number; y?: number };
    animate: { opacity: number; x?: number; y?: number };
    exit: { opacity: number; x?: number; y?: number };
  };
};

const sides: AnimationConfig = {
  left: {
    initial: { opacity: 0, x: -15 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  },

  top: {
    initial: { opacity: 0, y: -15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  },
};

// Animation config
const AnimatedSection = ({ children, css, side = "left" }: Props) => {
  return (
    <motion.div
      {...sides[side]}
      className={css}
      transition={{ ease: "easeOut", duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
