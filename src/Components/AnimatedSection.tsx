import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  css: string;
}

const defaultStyles = {
  initial: { opacity: 0, x: -5 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const AnimatedSection = ({ children, css }: Props) => {
  return (
    <motion.div
      {...defaultStyles}
      className={css}
      transition={{ ease: "easeOut", duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
