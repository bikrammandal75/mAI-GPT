import { decodeToken } from "react-jwt";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPlus, BiSearch } from "react-icons/bi";
import ChatHistory from "./chat/chat-history";
import { Link, useNavigate } from "react-router";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import Settings from "./modals/Settings";
import Profile from "./modals/Profile";
import Customization from "./modals/Customization";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useChatHistory } from "./context/ChatHistoryContext";
import { useChat } from "./context/ChatContext";
const VITE_DICEBEAR_API = import.meta.env.VITE_DICEBEAR_API;
import { FiLogOut, FiSettings, FiAlertCircle, FiUpload, FiUploadCloud, FiFileText, FiInfo, FiVideo } from "react-icons/fi";
import { MdSubscriptions } from "react-icons/md";

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const navigate = useNavigate();

  const { clearMessages = () => { }, setChatParam, } = useChat();
  const handleClearMessages = () => {
    clearMessages(); // Call the clearMessages function to reset messages
    setChatParam((prev) => ({
      ...prev,
      chatType: 1,
    }));
  };

  const token = Cookies.get("token"); // Get token from cookies
  const decoded = decodeToken(token);
  const name = decoded?.name || '';
  const { chatHistory, loading, searchQuery, setSearchQuery } =
    useChatHistory();

  // Modal state
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isCustomizeModalOpen, setIsCustomizeModalOpen] = useState(false);
  const [isManuallyToggled, setIsManuallyToggled] = useState(false);

  const [showCollapseButton, setShowCollapseButton] = useState(false);

  const arrowButtonRef = useRef(null);

  // Toggle modal functions
  const openSettingsModal = () => setIsSettingsModalOpen(true);
  const closeModals = () => {
    setIsSettingsModalOpen(false);
    setIsProfileModalOpen(false);
    setIsCustomizeModalOpen(false);
  };

  const avatarUrl = name
    ? `${VITE_DICEBEAR_API}${encodeURIComponent(name)}`
    : "https://github.com/shadcn.png";

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleLogout = () => {
    const loadingToast = toast.loading("Logging out...");

    setTimeout(() => {
      Cookies.remove("token");
      toast.dismiss(loadingToast);
      toast.success("Logout successful!");
      window.location.href = "/";
    }, 500);
  };

  if (!token) return null; // If no token, do not render the sidebar

  return (
    <>
      {/* settings */}
      <Settings isOpen={isSettingsModalOpen} onClose={closeModals} />
      {/* profile */}
      <Profile isOpen={isProfileModalOpen} onClose={closeModals} />
      {/* customize */}
      <Customization isOpen={isCustomizeModalOpen} onClose={closeModals} />
      {/* Desktop Sidebar */}
      <div
        className={`z-30 hidden sm:block w-[260px]
    fixed left-[64px] top-0 h-screen
    bg-gray-50 dark:bg-zinc-800
    shadow-[0_0_2px_rgba(0,0,0,0.1)]
    transition-transform duration-300 ease-in-out
    overflow-visible
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        onMouseEnter={() => {
          setShowCollapseButton(isSidebarOpen ? true : true);
        }}
        onMouseLeave={() => {
          setShowCollapseButton(isSidebarOpen ? false : true);
        }}
      >

        {/* <div className="relative flex items-center justify-between px-4">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="cursor-pointer"
          >
            <img
              src="/icon.svg"
              alt="Logo"
              className="h-7 w-7"
            />
          </div>
          <div className="flex items-center gap-2">
            <div
              className="flex cursor-pointer items-center rounded-full border border-zinc-700 p-1.5 hover:bg-zinc-400/20 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-600/70"
              onClick={() => {
                handleClearMessages();
                navigate("/");
              }}
            >
              <AiOutlinePlus size={13} />
            </div>
          </div>
        </div> */}


        <div className="mt-2">
          {/* <div>
            <div
              className="flex mx-2 text-sm font-semibold text-[#585656] cursor-pointer items-center gap-2 rounded py-2 pl-2 hover:bg-gray-200"
              onClick={() => {
                handleClearMessages();
                navigate("/");
              }}
            >
              New Chat
            </div>
          </div>
          <div className="flex mx-2 text-sm font-semibold text-[#585656] cursor-pointer items-center gap-2 rounded py-2 pl-2 hover:bg-gray-200"
            onClick={() => {
              navigate("/myspace");
            }}
          >
            My Space
          </div> */}
          {/* <div className="relative mx-4 mt-2 border border-gray-200">
            <input
              type="text"
              className="w-full px-4 py-2 pr-10 outline-none dark:text-white"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value.replace(/^\s+/, ""))
              }
            />
            <span className="absolute top-1/2 right-4 -translate-y-1/2">
              <BiSearch className="dark:text-white" />
            </span>
          </div>  */}
          <div className="scrollbar-thin mt-3 mb-2 h-[calc(100dvh-2rem)] overflow-y-auto pl-4">
            {/* <h6 className="py-2 text-lg font-semibold dark:text-white">Today's history</h6> */}

            <ChatHistory chatHistory={chatHistory} loading={loading} />

            {/* <h6 className="py-2 text-lg font-semibold dark:text-white">Yesterday's history</h6>
                        <ChatHistory />
                        <h6 className="py-2 text-lg font-semibold dark:text-white">Last Weeks history</h6>
                        <ChatHistory /> */}
          </div>
        </div>
        {/* <div className="bg-gray-50 border-gray-200 px-4 py-2 pl-2 absolute bottom-0 w-full">
          <Popover className="relative">
            <PopoverButton className="flex w-full cursor-pointer items-center gap-2 rounded-md px-4 py-2.5 pl-2 text-left text-lg font-semibold transition-all duration-300 ease-in group-hover:px-4 hover:bg-gray-100 hover:text-black focus:outline-none dark:text-zinc-400 hover:dark:bg-zinc-700 hover:dark:text-white">
              <img
                src={avatarUrl}
                alt="profile"
                className="h-7 w-7 rounded-full"
              />
              <span className="w-96 truncate">{name ?? ""}</span>
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
                className="absolute z-[9999] w-[258px] -translate-y-3 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-800"
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
                    <p className="font-medium dark:text-white">Log-out</p>
                  </li>
                </ul>
              </PopoverPanel>
            </Transition>
          </Popover>
          
        </div> */}
      </div>
    </>
  );
}
