import { MdModeEditOutline } from "react-icons/md";
import { TbCopy } from "react-icons/tb";
import { CgShare } from "react-icons/cg";
import { BsArrowRepeat } from "react-icons/bs";
import { RxSpeakerLoud, RxStop } from "react-icons/rx";
import { HiOutlineDownload, HiOutlineThumbDown, HiOutlineThumbUp } from "react-icons/hi";
import { motion } from "motion/react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // Dark theme
import { vs as baseVs } from "react-syntax-highlighter/dist/esm/styles/prism"; // Light theme
import { useEffect, useState } from "react";
import Share from "../modals/Share";
import { useModel } from "../context/ModelContext";
import { CHAT_FEEDBACK } from "./Api/post";
import { useChat } from "../context/ChatContext";
import { toast } from "sonner";
import UseMarkdownRenderer from "../hooks/useMarkdownRenderer";
import Cookies from "js-cookie";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { handleTextToSpeech } from "../helper/speechHelpers";
import { downloadPDF } from "../helper/pdfHelpers";
import { copyToClipboard } from "../helper/clipboardHelpers";

const ChatMessage = ({ text, isUser, isNew, chatId, candidates }) => {
    const token = Cookies.get("token"); // Get token from cookies

    const { messages, isGenerating, setIsGenerating, setIsTypingDone, isPaused, sendMessage } = useChat(); // Use context states
    const lastUserMessage = [...messages].reverse().find((msg) => msg.isUser)?.text;

    const { models, selectedModel, setSelectedModel } = useModel();
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [speechStatus, setSpeechStatus] = useState("idle");
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);
    const [displayedText, setDisplayedText] = useState(""); // State for progressively displayed text
    const [isFinishedTyping, setIsFinishedTyping] = useState(!isNew);


    useEffect(() => {
        if (!isNew) {
            setDisplayedText(text); // Show full text if not new
            return;
        }

        setIsTypingDone(false); // Set typing flag
        const words = typeof text === "string" ? text.split(/(\s+)/) : [];
        let index = 0;
        let tempText = "";

        const typingInterval = setInterval(() => {
            if (isPaused) {
                clearInterval(typingInterval);
                return;
            }

            if (index < words.length) {
                tempText += words[index];
                setDisplayedText(tempText);
                index++;
            } else {
                clearInterval(typingInterval);
                setIsFinishedTyping(true);
                setIsGenerating(false);
                setIsTypingDone(true);
            }
        }, 5); // Adjust delay for word-by-word feel

        return () => clearInterval(typingInterval);
    }, [text, isNew, isPaused, setIsGenerating]);



    const openShareModal = () => setIsShareModalOpen(true);
    const closeModals = () => setIsShareModalOpen(false);

    const handleCopy = (code) => {
        copyToClipboard(code, () => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const handleEdit = () => setIsEditing(true);
    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditedText(text);
    };
    const handleSaveEdit = () => {
        setIsEditing(false);
        if (onUpdate) onUpdate(editedText);
    };

    const [isDarkMode, setIsDarkMode] = useState(document.documentElement.getAttribute("data-theme") === "dark");

    // Listen for theme changes from [data-theme]
    useEffect(() => {
        const observer = new MutationObserver(() => {
            const theme = document.documentElement.getAttribute("data-theme");
            setIsDarkMode(theme === "dark");
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

        return () => observer.disconnect();
    }, []);

    // Customize light theme background
    const vs = {
        ...baseVs,
        'pre[class*="language-"]': {
            ...baseVs['pre[class*="language-"]'],
            background: "#f5f5f5",
        },
        'code[class*="language-"]': {
            ...baseVs['code[class*="language-"]'],
            background: "#f5f5f5",
        },
    };

    const sendFeedback = async (botMessage, liked) => {
        try {
            // Find the index of the bot's message
            const botIndex = messages.findIndex((msg) => msg.text === botMessage && !msg.isUser);

            // Get the user message that came before this bot response
            const userMessage = botIndex > 0 ? messages[botIndex - 1]?.text : "Unknown";

            const payload = {
                userId: 0, // Replace with actual userId if available
                chatId: chatId,
                conversaction: {
                    userMessage: userMessage,
                    assistantMessage: botMessage,
                },
                liked: liked,
            };

            const response = await CHAT_FEEDBACK(payload);
            if (response.status === 200) {
                toast.success(response?.data?.message || "Feedback submitted successfully.");
            } else {
                toast.error(response?.data?.message || "Failed to submit feedback.");
            }
        } catch (error) {
            console.error("Error submitting feedback:", error);
        }
    };

    const handleSpeak = () => {
        handleTextToSpeech(text, speechStatus, setSpeechStatus);
    };

    const handleDownloadPDF = async () => {
        const botIndex = messages.findIndex((msg) => msg.text === text && !msg.isUser);
        const userText = botIndex > 0 ? messages[botIndex - 1]?.text : "Unknown";

        const toastId = toast.loading("Preparing PDF...");

        try {
            await downloadPDF(userText, text);
            toast.success("PDF downloaded successfully!", { id: toastId });
        } catch (error) {
            console.error("PDF download error:", error);
            toast.error("Failed to download PDF", { id: toastId });
        }
    };

    const extractRelatedQuestions = () => {
        if (!displayedText.includes("**Related questions**")) return [];

        const [, relatedPart] = displayedText.split("**Related questions**");
        if (!relatedPart) return [];

        const lines = relatedPart.split("\n");
        const questions = [];

        for (let line of lines) {
            const trimmed = line.trim();
            if (trimmed && !trimmed.startsWith("**")) {
                questions.push(trimmed);
            }
        }

        return questions;
    };


    const renderMarkdownContent = () => {

        const mainText = (!isGenerating ? displayedText : text);
        const [beforeRelated] = mainText.split("**Related questions**");

        return (
            <ReactMarkdown
                components={{
                    p: ({ node, ...props }) => (
                        <p className="mb-4 leading-relaxed text-gray-800 dark:text-gray-200 break-words" {...props} />
                    ),
                    h1: ({ node, ...props }) => (
                        <h1 className="mt-6 mb-2 text-2xl font-bold text-zinc-900 dark:text-white" {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                        <h2 className="mt-4 mb-2 text-xl font-semibold text-zinc-800 dark:text-zinc-100" {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                        <ul className="mb-4 list-disc pl-5 text-gray-800 dark:text-gray-200" {...props} />
                    ),
                    ol: ({ node, ...props }) => (
                        <ol className="mb-4 list-decimal pl-5 text-gray-800 dark:text-gray-200" {...props} />
                    ),
                    a: ({ node, ...props }) => (
                        <a
                            {...props}
                            className="text-blue-500 underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                    ),
                    code({ inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        const theme = isDarkMode ? oneDark : vs;
                        const codeString = String(children).replace(/\n$/, "");

                        return !inline && match ? (
                            <div className="relative my-4 w-full max-w-[46rem] overflow-x-auto">
                                <button
                                    className="absolute top-2 right-2 z-10 text-gray-400 transition-colors hover:text-gray-200"
                                    onClick={() => handleCopy(codeString)}
                                >
                                    <TbCopy size={16} />
                                </button>

                                <SyntaxHighlighter
                                    style={theme}
                                    language={match[1]}
                                    PreTag="div"
                                    className="max-w-full overflow-x-auto rounded-lg p-4 pr-10 text-sm"
                                    {...props}
                                >
                                    {codeString}
                                </SyntaxHighlighter>
                                {copied && (
                                    <span className="absolute top-2 right-10 z-10 text-xs text-green-400">Copied!</span>
                                )}
                            </div>
                        ) : (
                            <code className="break-all whitespace-pre-wrap rounded bg-zinc-100 px-1 py-0.5 text-sm text-pink-600 dark:bg-zinc-800">
                                {children}
                            </code>
                        );
                    },
                    blockquote: ({ node, ...props }) => (
                        <blockquote
                            className="border-l-4 border-blue-400 pl-4 text-zinc-600 italic dark:text-zinc-300"
                            {...props}
                        />
                    ),
                }}
            >
                {beforeRelated?.replace(/\n/g, "\n\n")}

            </ReactMarkdown>
        );
    };

    return (
        <>
            <Share isOpen={isShareModalOpen} onClose={closeModals} />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 w-full text-gray-800 dark:text-black`}
            >
                {isUser ? (
                    <div className={`flex items-center ${isEditing ? "w-full" : ""}`}>
                        {isEditing ? (
                            <div className="border-theme flex w-full flex-col gap-2 rounded-lg border px-4 py-2">
                                <textarea
                                    className="min-h-[200px] w-full resize-none rounded-md p-2 outline-none dark:bg-zinc-800 dark:text-white"
                                    value={editedText}
                                    onChange={(e) => setEditedText(e.target.value)}
                                />
                                <div className="flex justify-end gap-2">
                                    <button
                                        className="flex w-16 items-center justify-center rounded-2xl border px-4 py-1 text-sm dark:bg-zinc-900/60 dark:text-white"
                                        onClick={handleCancelEdit}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="flex w-16 items-center justify-center rounded-2xl border bg-zinc-800 px-4 py-1 text-sm text-white dark:bg-white"
                                        onClick={handleSaveEdit}
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="dark:bg-secondary w-full max-w-full overflow-x-auto break-words break-all rounded-lg px-4 py-1 md:max-w-2xl dark:text-white">

                                {renderMarkdownContent()}
                            </div>
                        )}
                        {isUser && !isEditing && token && (
                            <span
                                className="cursor-pointer rounded-md px-2 py-1 text-xs text-gray-500 hover:bg-zinc-100 dark:text-gray-400 dark:hover:bg-zinc-700"
                                onClick={handleEdit}
                            >
                                <MdModeEditOutline size={16} />
                            </span>
                        )}
                    </div>
                ) : (
                    <div>
                        <div className="dark:bg-secondary w-fit rounded-lg px-4 py-1 dark:text-white">
                            {isGenerating ? (
                                <div className="text-white dark:text-white">{String(displayedText || "")}</div>

                            ) : (
                                renderMarkdownContent()
                            )}
                            {candidates && candidates.length > 0 && (
                                <div className="mt-4 space-y-2">

                                    {candidates.slice(0, 5).map((c, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 border border-zinc-200 dark:border-zinc-700 rounded-lg p-3 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition cursor-pointer"
                                        >

                                            {/* Avatar */}
                                            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">
                                                {c.name?.split(" ").map(n => n[0]).join("").slice(0, 2)}
                                            </div>

                                            {/* Candidate Info */}
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {c.name}
                                                </span>

                                                <span className="text-xs text-gray-500">
                                                    {c.title}
                                                </span>
                                            </div>

                                        </div>
                                    ))}

                                </div>
                            )}
                        </div>

                        {/* Related Questions List */}
                        {isFinishedTyping && !isUser && (
                            <div className="mt-4 pl-2">
                                {extractRelatedQuestions().length > 0 && (
                                    <div>
                                        <p className="mb-2 text-base font-semibold text-zinc-600 dark:text-zinc-300">Related questions</p>
                                        <ul className="space-y-2">
                                            {extractRelatedQuestions().map((question, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() => sendMessage(question)}
                                                    className="flex cursor-pointer items-center gap-2 text-base hover:text-blue-600 dark:text-blue-400"
                                                >
                                                    <span className="text-lg">{"+"}</span>
                                                    <span>{question}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                       
                    </div>
                )}
            </motion.div>
        </>
    );
};

export default ChatMessage;
