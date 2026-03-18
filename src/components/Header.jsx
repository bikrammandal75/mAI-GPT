import { decodeToken } from "react-jwt";
import { BiPlus, BiSearch } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import Settings from "./modals/Settings";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { useModel } from "./context/ModelContext";
import ChatHistory from "./chat/chat-history";
import { Link, useNavigate } from "react-router";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { CHAT_HISTORY } from "./chat/Api/post";
import { useTranslation } from "react-i18next";
import { useChatHistory } from "./context/ChatHistoryContext";
import { useChat } from "./context/ChatContext";
import { FiAlertCircle, FiLogOut, FiSettings, FiUpload } from "react-icons/fi";
import LoginReminder from "./modals/LoginReminder";
import { AiOutlinePlus } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
const VITE_DICEBEAR_API = import.meta.env.VITE_DICEBEAR_API;

const languages = [
    { code: "en", label: "English" },
    // { code: "es", label: "Spanish" },
    // { code: "fr", label: "French" },
];

const Header = ({ setIsMenuOpen, isMenuOpen, isSidebarOpen, setIsSidebarOpen, token }) => {
    const { chatHistory, loading, searchQuery, setSearchQuery } = useChatHistory();
    const { messages, clearMessages } = useChat();
    const handleClearMessages = () => {
        clearMessages(); // Call the clearMessages function to reset messages
    };

    const navigate = useNavigate();

    const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
    const [showModelDropdown, setShowModelDropdown] = useState(false);
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    // Modal state
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
    const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);
    const modelRef = useRef(null);
    const languageRef = useRef(null);
    const { models, selectedModel, setSelectedModel } = useModel();

    const { t, i18n } = useTranslation();

    const handleLanguageChange = (langCode) => {
        i18n.changeLanguage(langCode);
        localStorage.setItem("language", langCode);
        setLanguage(langCode);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modelRef.current && !modelRef.current.contains(event.target)) {
                setShowModelDropdown(false);
            }
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setShowLanguageDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Toggle modal functions
    const openSettingsModal = () => setIsSettingsModalOpen(true);
    const closeModals = () => {
        setIsSettingsModalOpen(false);
        setIsReminderModalOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const email = Cookies.get("email") || "";
    // const avatarUrl = email ? `${VITE_DICEBEAR_API}${encodeURIComponent(email)}` : "https://github.com/shadcn.png";
    // const token = Cookies.get("token");
    const decoded = decodeToken(token);
    const name = decoded?.name || '';
    const avatarUrl = name ? `${VITE_DICEBEAR_API}${encodeURIComponent(name)}` : "https://github.com/shadcn.png";
    const handleLogout = () => {
        const loadingToast = toast.loading("Logging out...");

        setTimeout(() => {
            Cookies.remove("token");
            Cookies.remove("email");
            toast.dismiss(loadingToast);
            toast.success("Logout successful!");
            window.location.href = "/";
        }, 500);
    };

    // if (!token) {
    //     return null; // Hide sidebar completely if there's no token
    // }

    return (
        <>
            <LoginReminder isOpen={isReminderModalOpen} onClose={closeModals} />
            {/* settings */}
            <Settings isOpen={isSettingsModalOpen} onClose={closeModals} />
            {!token && <header className="dark:bg-primary border-theme hidden min-h-16 items-center justify-between px-6 md:flex">
                <div className="flex items-center gap-4">
                    {/* {!isSidebarOpen && (
                        <> */}
                    {/* {!token && (
                        <div
                            onClick={() => {
                                handleClearMessages();
                                navigate("/");
                            }}
                            className="flex items-center cursor-pointer gap-2"
                        >
                            <img
                                src="/icon.svg"
                                alt="Logo"
                                className="h-7 w-7"
                            />
                            <p className="text-base font-light">Genreact</p>
                        </div>
                    )} */}


                    {/* {token && !isSidebarOpen && (
                        <div
                            className="flex cursor-pointer items-center rounded-full border border-zinc-700 p-1.5 hover:bg-zinc-400/20 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-600/70"
                            onClick={() => {
                                handleClearMessages();
                                navigate("/");
                            }}
                        >
                            <AiOutlinePlus size={20} />
                        </div>
                    )} */}
                </div>
                <div className="flex items-center gap-3">
                    {/* login/signup buttons */}
                    {!token && (
                        <div className="flex gap-4">
                            <Link to="/login">
                                <button className="flex h-10 w-25 items-center justify-center rounded-full bg-zinc-700 px-4 py-2 font-semibold text-white transition hover:bg-zinc-600 dark:bg-white dark:text-zinc-700 dark:hover:bg-gray-200 hover:dark:text-black">
                                    Log In
                                </button>
                            </Link>
                            <Link to="/register">
                                <button className="flex h-10 w-25 items-center justify-center rounded-full bg-white px-4 py-2 font-semibold shadow hover:bg-gray-200 hover:text-black dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 hover:dark:text-white">
                                    {t("signup")}
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </header>}
            <header className="block border-b border-zinc-600 bg-white px-2 py-3 md:hidden dark:bg-zinc-800">
                <div className="flex items-center justify-between">
                    {/* Center: Mobile Menu Button */}
                    {token && (
                        <>
                            <button
                                className="p-2 text-gray-900 hover:text-gray-700 md:hidden dark:text-gray-900 dark:hover:text-gray-800"
                                onClick={toggleMenu}
                            >
                                <HiMenuAlt3 className="h-6 w-6 dark:text-white" />
                            </button>
                        </>
                    )}

                    {!token && (
                        <div
                            onClick={() => {
                                handleClearMessages();
                                navigate("/");
                            }}
                        >
                            <img
                                src="/icon.svg"
                                alt="Logo"
                                className="h-7 w-7 cursor-pointer"
                            />
                        </div>
                    )}

                    {token && (
                        <div
                            onClick={() => {
                                handleClearMessages();
                                navigate("/");
                            }}
                        >
                            <img
                                src="/icon.svg"
                                alt="Logo"
                                className="h-7 w-7 cursor-pointer"
                            />
                        </div>
                    )}

                    {/* login/signup buttons */}
                    {!token && (
                        <div className="flex gap-1 ml-auto">
                            <Link to="/login">
                                <button className="flex h-8 w-20 items-center justify-center rounded-full bg-zinc-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-zinc-600 dark:bg-white dark:text-zinc-700 dark:hover:bg-gray-200">
                                    Log In
                                </button>
                            </Link>
                            <Link to="/register">
                                <button className="flex h-8 w-20 items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold shadow dark:bg-zinc-800 dark:text-white">
                                    {t("signup")}
                                </button>
                            </Link>
                        </div>
                    )}
                    {isMenuOpen && <div className="absolute inset-0 z-[16] bg-black/20" onClick={toggleMenu}></div>}
                </div>
            </header>
            {/* Mobile Sidebar */}
            <div
                className={`absolute top-0 z-20 h-screen w-60 border-r bg-gray-50 py-4 dark:bg-zinc-800 ${isMenuOpen ? "-translate-x-3" : "-translate-x-[250%]"} transition-all duration-300 ease-in-out`}
            >
                <div className="relative flex items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                        {/* Plus Icon (moved to left) */}
                        <div
                            className="flex cursor-pointer items-center rounded-full border border-zinc-700 p-1.5 hover:bg-zinc-400/20 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-600/70"
                            onClick={() => {
                                handleClearMessages();
                                setIsMenuOpen(false);
                                navigate("/");
                            }}
                        >
                            <AiOutlinePlus size={13} />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* Collapse Button */}
                        <button
                            className="p-1.5 rounded-full border border-zinc-700 hover:bg-zinc-400/20 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-600/70"
                            onClick={toggleMenu}
                        >
                            <TbLayoutSidebarLeftCollapse size={13} />
                        </button>
                    </div>
                </div>


                <div className="mt-2">
                    <div>
                        <div
                            className="mx-2 flex cursor-pointer items-center gap-2 rounded py-2 pl-2 text-sm hover:bg-gray-100 dark:text-white dark:hover:bg-zinc-700"
                            onClick={() => {
                                handleClearMessages();
                                setIsMenuOpen(false);
                                navigate("/");
                            }}
                        >
                            {/* <FiLogOut size={16} className="mr-1" /> */}
                            New Chat
                        </div>
                    </div>
                    <div>
                        <div className="mx-2 flex cursor-pointer items-center gap-2 rounded py-2 pl-2 text-sm hover:bg-gray-100 dark:text-white dark:hover:bg-zinc-700"
                            onClick={() => {
                                setIsMenuOpen(false);
                                navigate("/myspace");
                            }}>
                            {/* <FiUpload size={16} className="mr-1" /> */}
                            My Space
                        </div>
                    </div>
                    {/* <div className="relative mx-4 border border-gray-200">
                        <input
                            type="text"
                            className="w-full px-4 py-2 pl-10 dark:text-white"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value.replace(/^\s+/, ""))}
                        />
                        <span className="absolute top-1/2 right-4 -translate-y-1/2">
                            <BiSearch className="dark:text-white" />
                        </span>
                    </div> */}
                    <div className="mt-3 mb-2 h-[calc(100dvh-13.5rem)] overflow-y-auto pl-4">
                        {/* <h6 className="py-2 text-lg font-semibold dark:text-white">Today's history</h6> */}

                        <ChatHistory chatHistory={chatHistory} loading={loading} setIsMenuOpen={setIsMenuOpen} />
                        {/* <h6 className="py-2 text-lg font-semibold dark:text-white">Yesterday's history</h6>
                        <ChatHistory />
                        <h6 className="py-2 text-lg font-semibold dark:text-white">Last Weeks history</h6>
                        <ChatHistory /> */}
                    </div>
                    <div className="bg-gray-50 border-gray-200 px-2 py-2">
                        {token && (
                            <Popover className="relative">
                                <PopoverButton className="flex w-full cursor-pointer items-center gap-2 rounded-sm px-4 py-2.5 pl-2 text-left text-lg font-semibold transition hover:bg-gray-200/90 focus:outline-none dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-700/90">
                                    <span>
                                        <img src={avatarUrl} alt="profile" className="h-7 w-7 rounded-full" />
                                    </span>
                                    {name ?? ""}
                                </PopoverButton>

                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <PopoverPanel
                                        anchor="bottom"
                                        className="absolute z-50 w-56 -translate-y-3 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-800"
                                    >
                                        <ul className="p-2">

                                            <li
                                                className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700"
                                                onClick={() => navigate("/profile")}
                                            >
                                                <FiSettings className="text-lg dark:text-white" />
                                                <p className="font-medium dark:text-white">Settings</p>
                                            </li>
                                            <li className="block cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700">
                                                <Link
                                                    to="/profile"
                                                    state={{ selectedTab: "Subscription" }}
                                                    className="flex items-center space-x-2"
                                                >
                                                    <MdSubscriptions className="text-lg dark:text-white" />
                                                    <p className="font-medium dark:text-white">
                                                        Upgrade Plan
                                                    </p>
                                                </Link>
                                            </li>
                                            <li
                                                className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700"
                                                onClick={handleLogout}
                                            >
                                                <FiLogOut className="text-lg dark:text-white" />
                                                <p className="font-medium dark:text-white">{t("logout")}</p>
                                            </li>

                                        </ul>
                                    </PopoverPanel>
                                </Transition>
                            </Popover>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;