import { AnimatePresence, motion } from "motion/react";
import ChatInput from "../components/chat/ChatInput";
import ChatContainer from "../components/chat/ChatContainer";
import { useChat } from "../components/context/ChatContext";
import Login from "./auth/login";
import Cookies from "js-cookie";
import { useRef, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import WorkspaceOptions from "./WorkspaceOptions";
import CandidatePanel from "./CandidatePanel";
import EmailTemplatePanel from "./EmailTemplatePanel";


const LANGUAGES = [
    { code: "en", label: "English" },
];

const Chat = () => {
    Login(); // Ensure login logic runs on component mount
    const { messages, sendMessage, candidates, showCandidatePanel, showTemplatePanel, jobData } = useChat();
    const token = Cookies.get("token");
    const [language, setLanguage] = useState(() => localStorage.getItem("language") || "en");
    const [showDropdown, setShowDropdown] = useState(false);
    const { t, i18n } = useTranslation();
    const languageRef = useRef(null);
    const navigate = useNavigate();

    const handleNavigateToPolicy = useCallback((route, tab) => {
        navigate(route, { state: { selectedTab: tab } });
    }, [navigate]);

    const handleLanguageChange = useCallback((langCode) => {
        i18n.changeLanguage(langCode);
        localStorage.setItem("language", langCode);
        setLanguage(langCode);
        setShowDropdown(false);
    }, [i18n]);

    const currentLangLabel = LANGUAGES.find((l) => l.code === language)?.label || "English";

    return (
        <motion.div className="flex h-full w-full">

            {showCandidatePanel ? (

                <>
                    <div className="w-[40%]  flex flex-col">
                        <ChatContainer messages={messages} />
                        <ChatInput onSendMessage={sendMessage} />
                    </div>

                    <div className="w-[60%]">
                        <CandidatePanel candidates={candidates} jobData={jobData} />
                    </div>
                </>

            ) : showTemplatePanel ? (

                <>
                    <div className="w-[40%]  flex flex-col">
                        <ChatContainer messages={messages} />
                        <ChatInput onSendMessage={sendMessage} />
                    </div>

                    <div className="w-[60%]">
                        <EmailTemplatePanel />
                    </div>
                </>

            ) : (

                <div className="flex flex-col flex-grow">

                    {messages.length === 0 ? (
                        <div className="flex flex-col items-center justify-center flex-grow">
                            <h1 className="text-2xl font-semibold mb-8">
                                Hi! Feel free to ask.
                            </h1>
                            <ChatInput onSendMessage={sendMessage} isInitialState />
                        </div>
                    ) : (
                        <>
                            <ChatContainer messages={messages} />
                            <ChatInput onSendMessage={sendMessage} />
                        </>
                    )}

                </div>

            )}

        </motion.div>
    );
};

export default Chat;