import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { CHAT_HISTORY } from "../chat/Api/post";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

const ChatHistoryContext = createContext();

export const ChatHistoryProvider = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(Cookies.get("token")); // Store token in state
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // Update token when it changes in cookies
    useEffect(() => {
        const interval = setInterval(() => {
            const newToken = Cookies.get("token");
            if (newToken !== token) {
                setToken(newToken);
            }
        }, 1000); // Check every second (adjust as needed)

        return () => clearInterval(interval); // Cleanup
    }, [token]);

    const fetchChatHistory = useCallback(async () => {
        if (!token) return; // Stop execution if token is missing

        setLoading(true);
        try {
            const response = await CHAT_HISTORY({
                searchTerm: searchQuery,
                offSet: 0,
                limit: 100,
            });
            if (response?.status === 200) {
                setChatHistory(response?.data?.chats || []);
            } else if (response?.status === 400) {
                setChatHistory([]);
                navigate("/login");
            }
        } catch (err) {
            console.log("Error fetching chat history:", err);
            if (err?.status === 400) {
                navigate("/login");
                setChatHistory([]);
            }
            Cookies.remove("token");
            localStorage.clear();
            window.location.href = "/";
        } finally {
            setLoading(false);
        }
    }, [searchQuery, token]);

    useEffect(() => {
        fetchChatHistory();
    }, [fetchChatHistory]); // Runs when `searchQuery` or `token` changes

    return (
        <ChatHistoryContext.Provider
            value={{ chatHistory, setChatHistory, loading, searchQuery, setSearchQuery, fetchChatHistory }}
        >
            {children}
        </ChatHistoryContext.Provider>
    );
};

export const useChatHistory = () => useContext(ChatHistoryContext);
