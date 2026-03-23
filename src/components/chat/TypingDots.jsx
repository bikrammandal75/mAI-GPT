import { motion } from "motion/react";
import { TbSparkles } from "react-icons/tb";

const TypingDots = () => {
    return (
        <div className="flex items-center gap-3 my-4 text-gray-500 dark:text-gray-300 text-sm">

            {/* Pulsing AI Icon */}
            <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 dark:bg-zinc-700"
            >
                <TbSparkles size={16} />
            </motion.div>

            {/* Animated text */}
            <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                Thinking...
            </motion.span>

        </div>
    );
};

export default TypingDots;