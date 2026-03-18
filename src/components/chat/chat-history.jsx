import { RiDeleteBinLine } from "react-icons/ri";
import { TbArchive } from "react-icons/tb";
import { MdOutlineModeEdit } from "react-icons/md";
import { RxShare2 } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import Share from "../modals/Share";
import { useLocation, useNavigate, useParams } from "react-router";
import { HiMinus, HiOutlineDownload, HiPlus } from "react-icons/hi";
import { downloadPDF } from "../helper/pdfHelpers";
import { toast } from "sonner";
import { useChat } from "../context/ChatContext";
import { CHAT_DELETE, EDIT_CHAT_TITLE } from "./Api/post";
import DeleteChatModal from "../modals/DeleteChatModal";
import { useChatHistory } from "../context/ChatHistoryContext";
import Cookies from "js-cookie";

export default function ChatHistory({ chatHistory = [], loading = false, setIsMenuOpen }) {
  const { searchQuery, setSearchQuery } = useChatHistory();
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const [openMenuChatId, setOpenMenuChatId] = useState(null); // Changed state to track chatId
  const [expandedSections, setExpandedSections] = useState({
    today: true,
    yesterday: true,
    lastWeek: true,
    thisMonth: true,
    lastMonth: true,
    other: true,
  });
  const [allSectionsExpanded, setAllSectionsExpanded] = useState(true);

  const menuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    // toggleAllSections();
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuChatId(null); // Close the dropdown if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleAllSections = () => {
    const newState = !allSectionsExpanded;
    setAllSectionsExpanded(newState);
    setExpandedSections({
      today: newState,
      yesterday: newState,
      lastWeek: newState,
      thisMonth: newState,
      lastMonth: newState,
      other: newState,
    });
  };

  // Categorizing chats based on date
  const today = dayjs().startOf("day");
  const yesterday = dayjs().subtract(1, "day").startOf("day");
  const sevenDaysAgo = dayjs().subtract(7, "day").startOf("day");
  const startOfThisMonth = dayjs().startOf("month");
  const startOfLastMonth = dayjs().subtract(1, "month").startOf("month");
  const endOfLastMonth = dayjs().subtract(1, "month").endOf("month");

  const todayChats = chatHistory.filter((chat) =>
    dayjs(chat.timeStamp).isSame(today, "day")
  );
  const yesterdayChats = chatHistory.filter((chat) =>
    dayjs(chat.timeStamp).isSame(yesterday, "day")
  );
  const lastWeekChats = chatHistory.filter(
    (chat) =>
      dayjs(chat.timeStamp).isAfter(sevenDaysAgo) &&
      dayjs(chat.timeStamp).isBefore(yesterday)
  );
  const thisMonthChats = chatHistory.filter((chat) =>
    dayjs(chat.timeStamp).isAfter(startOfThisMonth)
  );
  const lastMonthChats = chatHistory.filter(
    (chat) =>
      dayjs(chat.timeStamp).isAfter(startOfLastMonth) &&
      dayjs(chat.timeStamp).isBefore(endOfLastMonth)
  );
  const otherChats = chatHistory.filter((chat) =>
    dayjs(chat.timeStamp).isBefore(startOfLastMonth)
  );

  const renderSection = (title, chats, key) => {
    if (chats.length === 0) return null;

    return (
      <div className="mb-2">
        <div className="mr-4 py-2 dark:text-white">
          <h3 className="text-sm font-medium">{title}</h3>
        </div>


        <AnimatePresence initial={false}>
          {expandedSections[key] && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className=""
            >
              {chats.map((chat) => (
                <ChatItem
                  key={chat.chatId}
                  chat={chat}
                  openMenuChatId={openMenuChatId}
                  setOpenMenuChatId={setOpenMenuChatId}
                  menuRef={menuRef}
                  setIsMenuOpen={setIsMenuOpen}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3 cursor-pointer hover:bg-zinc-200"
        onClick={toggleAllSections}
      >
        <span className="text-sm font-semibold text-[#585656] dark:text-white">History</span> {/* Added dark:text-white */}
        <button className="flex items-center gap-2 rounded-md px-4 py-2 mr-1 text-[#585656] dark:text-white"> {/* Added dark:text-white */}
          {allSectionsExpanded ? <HiMinus /> : <HiPlus />}
        </button>
      </div>

      {/* Search bar */}
      <div
        id="divSearch"
        className="relative rounded-xl mr-1 border border-gray-200"
        style={{ display: allSectionsExpanded ? "block" : "none" }}
      >
        <input
          type="text"
          className="w-full py-2 pr-10 outline-none dark:text-white"
          placeholder="Search"
          value={localQuery}
          onChange={(e) => {
            setLocalQuery(e.target.value); // only update local state
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearchQuery(localQuery.trimStart()); // update context state only on Enter
            }
          }}
        />
        <span className="absolute top-1/2 right-4 -translate-y-1/2 text-[#585656]">
          <BiSearch className="dark:text-white" />
        </span>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-10">
          {/* Loading Spinner */}
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-t-4 border-blue-500"></div>
        </div>
      ) : chatHistory.length === 0 ? (
        <p className="truncate rounded-md py-3 text-sm text-gray-600 transition-all duration-300 group-hover:bg-gray-100 group-hover:px-4 group-hover:text-black dark:text-zinc-400 group-hover:dark:bg-zinc-700 group-hover:dark:text-white">
          No chat history available
        </p>
      ) : (
        allSectionsExpanded && (
          <>
            {renderSection("Today", todayChats, "today")}
            {renderSection("Yesterday", yesterdayChats, "yesterday")}
            {renderSection("Last Week", lastWeekChats, "lastWeek")}
            {/* {renderSection("This Month", thisMonthChats, "thisMonth")} */}
            {/* {renderSection("Last Month", lastMonthChats, "lastMonth")} */}
            {renderSection("Other", otherChats, "other")}
          </>
        )
      )}
    </div>
  );
}

// Separate component for chat items
function ChatItem({ chat, openMenuChatId, setOpenMenuChatId, menuRef, setIsMenuOpen }) {
  const { clearMessages, messages } = useChat();
  const location = useLocation();

  const { setChatHistory } = useChatHistory();

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(chat.chatTitle);

  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const handleChatClick = () => {
    if (typeof setIsMenuOpen === 'function') {
      setIsMenuOpen(false);
    }
    navigate(`/c/${chat.chatId}`); // Navigate to chat page
  };

  useEffect(() => {
    if (openMenuChatId === chat.chatId) {
      const buttonRect = buttonRef.current?.getBoundingClientRect();
      const menuHeight = menuRef.current?.offsetHeight || 120; // Approximate height
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;

      // If not enough space below, position it above
      setDropUp(spaceBelow < menuHeight && spaceAbove > menuHeight);
    }
  }, [openMenuChatId, chat.chatId, menuRef]);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setOpenMenuChatId(openMenuChatId === chat.chatId ? null : chat.chatId); // Toggle dropdown
  };

  const openShareModal = () => setIsShareModalOpen(true);
  const closeModals = () => {
    setIsShareModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const handleExport = async (e) => {
    e.stopPropagation();
    const toastId = toast.loading("Exporting full conversation...");

    try {
      const allText = messages
        .map((msg) => `${msg.isUser ? "You" : "Assistant"}: ${msg.text || ""}`)
        .join("\n\n");

      await downloadPDF("Full Conversation", allText);
      toast.success("PDF downloaded successfully!", { id: toastId });
    } catch (error) {
      console.error("PDF export error:", error);
      toast.error("Failed to export PDF", { id: toastId });
    }
  };

  const handleDelete = async () => {
    try {
      const payload = {
        userId: chat.userId,
        chatTitle: chat.chatTitle,
        chatId: chat.chatId,
        timeStamp: chat.timeStamp,
      };

      const response = await CHAT_DELETE(payload);

      if (response?.status === 200) {
        toast.success(response?.data?.message ?? "Chat deleted successfully!");
        setIsDeleteModalOpen(false);

        // 🔥 Update chat history by removing the deleted chat
        setChatHistory((prev) =>
          prev.filter((item) => item.chatId !== chat.chatId)
        );

        // Check if the deleted chat is the currently open one
        const currentChatId = location.pathname.split("/c/")[1];
        if (currentChatId === chat.chatId) {
          clearMessages(); // Clear message state

          // ✅ Delay redirection to allow state updates to propagate
          setTimeout(() => {
            navigate("/", { replace: true });
          }, 0);
        }
      }
    } catch (error) {
      console.error("Error deleting chat:", error);
      toast.error(error.response?.data?.message ?? "Failed to delete chat.");
    }
  };

  return (
    <>
      <Share isOpen={isShareModalOpen} onClose={closeModals} />
      <DeleteChatModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={handleDelete}
      />
      <div className="group relative cursor-pointer" onClick={handleChatClick}>
        {/* Chat Title */}
        {isEditing ? (
          <input
            className="-ml-3 w-full truncate rounded-md px-3 py-3 text-sm text-gray-800 outline-none dark:bg-transparent dark:text-white"
            value={newTitle}
            autoFocus
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={async (e) => {
              if (e.key === "Enter") {
                try {
                  const payload = {
                    userId: chat.userId,
                    chatTitle: newTitle,
                    chatId: chat.chatId,
                    timeStamp: chat.timeStamp,
                  };
                  const res = await EDIT_CHAT_TITLE(payload);
                  if (res?.status === 200) {
                    toast.success("Chat title updated!");
                    setIsEditing(false);
                    setChatHistory((prev) =>
                      prev.map((item) =>
                        item.chatId === chat.chatId
                          ? { ...item, chatTitle: newTitle }
                          : item
                      )
                    );
                  }
                } catch (err) {
                  console.error(err);
                  toast.error("Failed to rename chat.");
                }
              } else if (e.key === "Escape") {
                setNewTitle(chat.chatTitle);
                setIsEditing(false);
              }
            }}
            onBlur={() => {
              setIsEditing(false);
              setNewTitle(chat.chatTitle); // Reset title if user blurs out without saving
            }}
          />
        ) : (
          <p
            className="-ml-3 truncate rounded-md px-3 py-3 text-sm text-gray-600 duration-300 group-hover:bg-gray-100  group-hover:text-black dark:text-zinc-400 group-hover:dark:bg-zinc-400 group-hover:dark:text-white"
            title={chat?.chatTitle ?? ""}
          >
            {chat?.chatTitle?.replace(/^"(.*)"$/, "$1") ?? ""}
          </p>
        )}

        {/* Three dots button */}
        <span
          ref={buttonRef}
          className="absolute top-1/2 right-0 -translate-y-1/2 rounded p-2 text-black opacity-0 transition-opacity duration-300 group-hover:bg-gray-100 group-hover:opacity-100 group-hover:shadow-[-4px_4px_5px_bg-gray-100] group-hover:dark:bg-zinc-700 group-hover:dark:text-white"
          onClick={handleMenuClick}
        >
          <BsThreeDotsVertical />
        </span>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {openMenuChatId === chat.chatId && (
            <motion.div
              ref={menuRef}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: -5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`border-theme absolute right-0 z-10 mt-2 w-40 rounded-md border bg-white shadow-lg ${dropUp ? "bottom-full mb-2" : "mt-2"
                }`}
            >
              <ul className="py-2 text-sm text-gray-700 dark:bg-zinc-700 dark:text-white">
                {/* <li
                                    className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:bg-zinc-700 dark:hover:bg-zinc-600/50"
                                    onClick={openShareModal}
                                >
                                    <span>
                                        <RxShare2 size={20} />
                                    </span>
                                    Share
                </li> */}
                <li
                  className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:bg-zinc-700 dark:hover:bg-zinc-600/50"
                  onClick={() => {
                    setIsEditing(true);
                    setTimeout(() => {
                      document.querySelector("input:focus")?.select(); // optional: auto-select text
                    }, 10);
                    setOpenMenuChatId(null); // close dropdown
                  }}
                >
                  <span>
                    <MdOutlineModeEdit size={20} />
                  </span>
                  Rename
                </li>

                <li
                  onClick={handleExport}
                  className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:bg-zinc-700 dark:hover:bg-zinc-600/50"
                >
                  <span>
                    <HiOutlineDownload size={20} />
                  </span>
                  Export
                </li>
                {/* <li className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:bg-zinc-700 dark:hover:bg-zinc-600/50">
                                    <span>
                                        <TbArchive size={20} />
                                    </span>
                                    Archive
                                </li> */}
                <li
                  className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:bg-zinc-700 dark:hover:bg-zinc-600/50"
                  onClick={() => setIsDeleteModalOpen(true)}
                >
                  <span>
                    <RiDeleteBinLine className="text-red-500" size={20} />
                  </span>
                  Delete
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
