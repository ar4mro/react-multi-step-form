import { motion } from "framer-motion";

export default function AnimatedCard({ children, key }) {
  return (
    <motion.div
      key={key}
      className="flex flex-col p-4 mt-2 bg-white rounded-md shadow-md"
      initial={{ x: 300, scale: 0.8, opacity: 0 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      exit={{ x: -300, scale: 0.8, opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
