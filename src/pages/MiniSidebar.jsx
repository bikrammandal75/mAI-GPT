import { NavLink } from "react-router-dom";
import { FiMenu, FiPlus, FiHome, FiInbox, FiGrid, FiFolder, FiGift, FiUser, FiFileText } from "react-icons/fi";
import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { MdSubscriptions } from "react-icons/md";
import { decodeToken } from "react-jwt";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useChat } from "../components/context/ChatContext";
import { startNewChat } from "./chatActions";
import { toast } from "sonner";

const MiniSidebar = ({ setIsSidebarOpen }) => {
    const token = Cookies.get("token");
    const decoded = decodeToken(token);
    const name = decoded?.name || "";
    const avatarUrl = name
        ? `${import.meta.env.VITE_DICEBEAR_API}${encodeURIComponent(name)}`
        : "https://github.com/shadcn.png";
    const navigate = useNavigate();
    const { clearMessages, setChatParam } = useChat();

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

    return (
        <aside
            className="fixed left-0 top-0 z-40 h-screen w-[64px]
    bg-gray-50 dark:bg-zinc-900
    border-r border-gray-200 dark:border-zinc-800
    flex flex-col items-center py-3"
        >

            {/* LOGO (Top) */}
            <div
                // onClick={() => {
                //     setIsSidebarOpen(true);
                //     navigate("/");
                // }}
                className="mb-6 flex flex-col items-center cursor-pointer gap-1"
            >
                <img
                    src="/icon.svg"
                    alt="Logo"
                    className="h-8 w-8"
                />
                <span className="text-[11px] font-light text-gray-700 dark:text-gray-300">
                    Genreact
                </span>
            </div>

            {/* HISTORY / MENU TOGGLE */}
            {token && <button
                onClick={() => setIsSidebarOpen(true)}
                className="mb-4 flex flex-col items-center gap-1 text-xs
             text-gray-700 dark:text-gray-300
             hover:text-indigo-600"
            >
                <div className="flex h-9 w-9 items-center justify-center rounded-md
                  border border-gray-300 dark:border-zinc-700
                  hover:bg-gray-100 dark:hover:bg-zinc-800">
                    <FiMenu size={18} />
                </div>
                <span>History</span>
            </button>}

            {/* + New */}
            <button
                onClick={() =>
                    startNewChat({ clearMessages, setChatParam, navigate })
                }
                className="mb-4 flex flex-col items-center gap-1 text-xs"
            >
                <div className="flex h-9 w-9 items-center justify-center rounded-md border">
                    <FiPlus size={16} />
                </div>
                <span>New</span>
            </button>

            {/* MAIN NAV */}
            <nav className="flex flex-col gap-4 flex-1">
                {[
                    { icon: FiHome, label: "Home", to: "/" },
                    { icon: FiFolder, label: "My Space", to: "/myspace" },

                    // ✅ Show AI Docs only when token exists
                    ...(token
                        ? [{ icon: FiFileText, label: "AI Docs", to: "/ai-docs" }]
                        : []),
                ].map((item, i) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={i}
                            to={item.to}
                            className={({ isActive }) =>
                                `flex flex-col items-center gap-1 text-[11px]
           ${isActive
                                    ? "text-indigo-600"
                                    : "text-gray-600 dark:text-gray-300"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <div
                                        className={`flex h-9 w-9 items-center justify-center rounded-md
                ${isActive
                                                ? "bg-indigo-100 dark:bg-zinc-700"
                                                : "hover:bg-gray-100 dark:hover:bg-zinc-800"
                                            }`}
                                    >
                                        <Icon size={18} />
                                    </div>

                                    <span className="text-center leading-tight">
                                        {item.label}
                                    </span>
                                </>
                            )}
                        </NavLink>
                    );
                })}
            </nav>


            {/* BOTTOM ICONS */}
            <div className="flex flex-col gap-4 pb-2">
                {/* <button
                    className="flex flex-col items-center gap-1 text-[11px]
                     text-gray-600 dark:text-gray-300 hover:text-indigo-600"
                    title="Rewards"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full
                          bg-blue-500 text-white">
                        <FiGift size={16} />
                    </div>
                </button> */}

                {/* PROFILE */}
                {token ? (
                    <Popover className="relative">
                        <PopoverButton className="flex flex-col items-center gap-1 text-[11px] focus:outline-none">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 dark:bg-zinc-700">
                                <img
                                    src={avatarUrl}
                                    alt="profile"
                                    className="h-7 w-7 rounded-full"
                                />
                            </div>
                            <span>Profile</span>
                        </PopoverButton>

                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <PopoverPanel className="absolute left-14 bottom-0 z-50 w-48 rounded-lg border bg-white shadow-lg dark:bg-zinc-800">
                                <ul className="p-2 text-sm">
                                    <li
                                        className="flex cursor-pointer items-center gap-2 rounded px-3 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700"
                                        onClick={() => navigate("/profile")}
                                    >
                                        <FiSettings />
                                        Settings
                                    </li>

                                    <li
                                        className="flex cursor-pointer items-center gap-2 rounded px-3 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700"
                                        onClick={() =>
                                            navigate("/profile", { state: { selectedTab: "Subscription" } })
                                        }
                                    >
                                        <MdSubscriptions />
                                        Upgrade Plan
                                    </li>

                                    <li
                                        className="flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-black-500 hover:bg-red-50 dark:hover:bg-zinc-700"
                                        onClick={handleLogout}
                                    >
                                        <FiLogOut />
                                        Logout
                                    </li>
                                </ul>
                            </PopoverPanel>
                        </Transition>
                    </Popover>
                ) : (
                    // 🔒 DISABLED PROFILE ICON (NO TOKEN)
                    <div
                        className="flex flex-col items-center gap-1 text-[11px] text-gray-400 cursor-not-allowed"
                        title="Login required"
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-800 opacity-50">
                            <FiUser size={16} />
                        </div>
                        <span>Profile</span>
                    </div>
                )}

            </div>
        </aside>
    );
};

export default MiniSidebar;
