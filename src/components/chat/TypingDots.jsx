import { useEffect, useState } from "react";

const TypingDots = ({ text = "Generating response" }) => {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-start my-4 text-gray-500 dark:text-gray-300 text-sm">
            {text}{dots}
        </div>
    );
};

export default TypingDots;
