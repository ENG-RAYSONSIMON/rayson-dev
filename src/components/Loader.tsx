import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ done }: { done: boolean }) => {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative mx-auto mb-5 h-14 w-14"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary blur-xl opacity-60" />
              <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary font-display text-2xl font-bold text-primary-foreground">
                R
              </div>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="mx-auto h-px bg-gradient-primary"
            />
            <p className="mt-4 font-mono text-xs text-muted-foreground">loading portfolio...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
