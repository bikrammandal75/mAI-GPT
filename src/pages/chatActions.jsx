export const startNewChat = ({ clearMessages, setChatParam, navigate }) => {
    clearMessages();
    setChatParam(prev => ({
        ...prev,
        chatType: 1,
    }));
    navigate("/");
};
