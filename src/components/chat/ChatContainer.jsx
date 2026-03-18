import { motion, AnimatePresence } from "motion/react";
import { AiOutlineArrowDown } from "react-icons/ai";
import ChatMessage from "./ChatMessage";
import { useEffect, useRef, useState } from "react";
import { useChat } from "../context/ChatContext";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import TypingDots from "./TypingDots";

const ChatContainer = () => {
    const { messages, isGenerating } = useChat();
    const containerRef = useRef(null);
    const [isScrollable, setIsScrollable] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);

    const location = useLocation();

    const getChatIdFromUrl = () => {
        const pathSegments = location.pathname.split("/");
        return pathSegments[pathSegments.length - 1];
    };
    const chatId = getChatIdFromUrl();

    const { t } = useTranslation();

    // Check if container is scrollable and if user is at the bottom
    const checkScrollableAndPosition = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const isContentScrollable = container.scrollHeight > container.clientHeight;
            setIsScrollable(isContentScrollable);

            if (isContentScrollable) {
                const isAtBottom = Math.abs(container.scrollHeight - container.scrollTop - container.clientHeight) < 10;
                setShowScrollButton(!isAtBottom);
            } else {
                setShowScrollButton(false);
            }
        }
    };

    // Initial check and auto-scroll to bottom when new messages arrive
    useEffect(() => {
        checkScrollableAndPosition();

        // Auto-scroll to bottom when new messages arrive
        if (containerRef.current && messages.length > 0) {
            containerRef.current.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [messages]);

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            checkScrollableAndPosition();
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    // Handle window resize to recheck scrollability
    useEffect(() => {
        const handleResize = () => {
            checkScrollableAndPosition();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const scrollToBottom = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative w-full">
            <div
                ref={containerRef}
                className={`w-full overflow-y-auto overflow-x-hidden pt-3 ${messages.length === 0 ? "h-20" : "h-[calc(100dvh-15rem)]"}`}
            >
                <div className="mx-auto max-w-3xl">
                    {messages.length === 0 ? (
                        <h1 className="text-center text-2xl font-semibold md:text-4xl text-gray-800 dark:text-gray-300">
                            Hi! Feel free to ask.
                        </h1>
                    ) : (
                        <>
                            {/* <h1 className="mb-6 text-center text-2xl font-semibold md:text-4xl dark:text-white">
                                {messages[0].text} ?
                            </h1> */}
                        </>
                    )}
                    <AnimatePresence>
                        {messages.map((message) => (
                            <motion.div
                                key={message.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="relative"
                            >
                                <ChatMessage
                                    text={message.text}
                                    isUser={message.isUser}
                                    isNew={message.isNew}
                                    chatId={chatId}
                                    candidates={message.candidates}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    {/* {isGenerating && (
                        <div className="text-start my-4 text-gray-500 dark:text-gray-300 text-sm">
                            Generating Response...
                        </div>
                    )} */}
                    {isGenerating && <TypingDots />}

                </div>
            </div>
            {isScrollable && showScrollButton && messages.length > 0 && (
                <div
                    className="border-theme absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer rounded-full border bg-white p-1 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-700"
                    onClick={scrollToBottom}
                >
                    <AiOutlineArrowDown className="dark:text-white" size={18} />
                </div>
            )}
        </div>
    );
};

export default ChatContainer;
