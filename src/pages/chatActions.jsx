export const startNewChat = ({ clearMessages, setChatParam, navigate, setShowCandidatePanel, setShowTemplatePanel }) => {
    clearMessages();
    setChatParam(prev => ({
        ...prev,
        chatType: 1,
    }));
    setShowCandidatePanel(false);
    setShowTemplatePanel(false);
    navigate("/");
};
