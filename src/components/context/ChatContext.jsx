import { createContext, useContext, useEffect, useState } from "react";
import { CHAT_DETAILS, CHAT_RESPONSE, CREATE_CHAT, FEED_CHAT, SAVE_CHAT, CHAT_AGENT_RESPONSE, searchCandidates } from "../chat/Api/post";
import { useModel } from "./ModelContext";
import { useLocation } from "react-router";
import Cookies from "js-cookie";
import { useChatHistory } from "./ChatHistoryContext";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const token = Cookies.get("token");
    const { setChatHistory } = useChatHistory();

    const { selectedModel } = useModel();
    const [messages, setMessages] = useState([]);
    const [isPaused, setIsPaused] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [chatParam, setChatParam] = useState({
        chatType: 1
    });
    const [isGenerating, setIsGenerating] = useState(false);
    const [chatId, setChatId] = useState(null);
    const location = useLocation();
    const [isTypingDone, setIsTypingDone] = useState(true);
    const [jobData, setJobData] = useState({
        jobTitle: "",
        minExp: "",
        maxExp: "",
        location: "",
        skills: []
    });
    const [candidates, setCandidates] = useState([]);
    const [showCandidatePanel, setShowCandidatePanel] = useState(false);
    const [awaitingSearchConfirmation, setAwaitingSearchConfirmation] = useState(false);
    const [recruiterPhase, setRecruiterPhase] = useState("JOB_COLLECTION");
    const [outreachTemplate, setOutreachTemplate] = useState("");
    const [showTemplatePanel, setShowTemplatePanel] = useState(false);
    const [awaitingTemplateConfirmation, setAwaitingTemplateConfirmation] = useState(false);



    const togglePause = () => setIsPaused((prev) => !prev);

    const uploadFile = (file) => {
        if (!file) {
            setUploadedFile(null);
            return;
        }

        const allowedTypes = ["pdf", "doc", "docx", "rtf", "txt"];
        const fileExtension = file.name.split(".").pop().toLowerCase();

        if (!allowedTypes.includes(fileExtension)) {
            alert("Unsupported file type. Please upload PDF, DOC, DOCX, RTF, or TXT.");
            return;
        }

        setUploadedFile(file);
        console.log("File uploaded:", file);
    };

    const convertToBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(",")[1]); // remove data:mime/type;base64,
            reader.onerror = (error) => reject(error);
        });

    const clearMessages = () => {
        setMessages([]); // Reset the messages state
        setChatId(null);
    };

    // Step 1: Fetch chat details when the component mounts or when the chatId changes
    useEffect(() => {
        const urlChatId = location.pathname.split("/c/")[1]; // Extract chatId from URL

        if (!urlChatId) {
            setChatId(null);
            setMessages([]); // Reset messages when at root path "/"
        } else if (urlChatId !== chatId) {
            setChatId(urlChatId);
        }
    }, [location.pathname]); // Depend on pathname

    useEffect(() => {
        if (token && chatId) {
            fetchChatDetails(chatId); // Call API when chatId updates
        }
    }, [chatId, token]); // Depend on chatId

    const fetchChatDetails = async (chatId) => {
        if (!token) return;
        try {
            const response = await CHAT_DETAILS(chatId);
            if (response?.status === 200) {
                const conversation = response?.data?.conversation ?? [];
                const updatedMessages = conversation.reduce((acc, msg, index) => {
                    const userMessage = {
                        id: `user-${index}`,
                        text: msg.userMessage,
                        isUser: true,
                        timestamp: Date.now(),
                        isNew: false, // Mark as not new (from history)
                    };

                    const assistantMessage = {
                        id: `bot-${index}`,
                        text: msg.assistantMessage,
                        isUser: false,
                        timestamp: Date.now(),
                        isNew: false, // Mark as not new (from history)
                    };

                    // Add both messages in the sequence
                    acc.push(userMessage, assistantMessage);

                    return acc;
                }, []);
                setMessages(updatedMessages);
                setIsGenerating(false);
                setIsTypingDone(true);
            } else {
                console.error("Error fetching chat details:", response);
            }
        } catch (error) {
            console.error("Error fetching chat details:", error);
            Cookies.remove("token");
            localStorage.clear();
            window.location.href = "/";
        }
    };

    const RECRUITER_AGENT_PROMPT = `
You are an intelligent Recruitment Assistant.

Your role is to extract job requirements and guide the recruiter through the hiring workflow.

--------------------------------------------------

### CURRENT EXTRACTED JOB DATA
{{JOB_DATA}}

--------------------------------------------------

### CORE RULES

1.  **Merge Data:** Take the values from "Current extracted job data" and update them ONLY if the user provides new information in their latest message.
2.  **Persist Values:** If a field (like jobTitle or minExp) is already present in the "Current extracted job data" and the user doesn't change it, YOU MUST keep that value in your response and JSON. Do not leave it empty.

3. **Required Fields**
The job must contain:

- jobTitle
- minExp
- maxExp
- location
- skills

4. **Missing Fields Handling**
If any field is missing, politely ask the recruiter for ONLY that missing information.

5. **Completion Detection**
If all required fields are filled, ask the user if they would like to proceed with candidate search.

Examples (do NOT repeat exactly every time):
- "All details look complete. Should I search for matching candidates?"
- "I have everything needed. Would you like me to find candidates now?"
- "These requirements look good. Shall I proceed with candidate search?"

The wording should vary naturally.

6. **Search Confirmation Detection**

If the user message clearly indicates approval or intent to proceed with candidate search, set:

"confirmSearch": true

Examples:
- yes
- proceed
- go ahead
- search
- find candidates
- ok do it

Otherwise keep it false.

--------------------------------------------------

### AFTER CANDIDATES ARE FOUND

Once candidates are found, your role changes.

Instead of asking the user to choose Email or SMS directly, guide them conversationally toward outreach preparation.

Ask if they would like to generate an outreach email for these candidates.

Examples (do NOT repeat exactly every time):

- "These candidates look promising. Would you like me to generate an outreach email template?"
- "Shall I prepare an email template to contact these candidates?"
- "Would you like help drafting an email to reach out to them?"
- "I can generate a recruiter outreach email for these candidates if you'd like."

The wording must vary naturally.

Do NOT force fixed phrasing.

--------------------------------------------------

### TEMPLATE GENERATION FLOW

1. Ask if the user wants to generate an outreach email template.
2. Wait for the user response.
3. If the user confirms, generate the outreach email template.
4. After generating the template, ask if they would like to use it or modify it.
5. If the user asks for changes, modify the template and ask for confirmation again.

Never force a fixed sentence.

--------------------------------------------------

### RESPONSE FORMAT (STRICT)

<One short conversational sentence acknowledging the user input>

Job Title: <Value>
Min Exp: <Value>
Max Exp: <Value>
Location: <Value>
Skills: <Value>

<Question asking for missing information OR next step>

JSON_START
{
  "jobTitle": "...",
  "minExp": "...",
  "maxExp": "...",
  "location": "...",
  "skills": [],
  "confirmSearch": false
}
JSON_END
`;

    const isJobComplete = (data) => {
        return (
            data.jobTitle &&
            data.minExp &&
            data.maxExp &&
            data.location &&
            data.skills.length > 0
        );
    };

    const removeEmptyFields = (text) => {
        return text
            .split("\n")
            .filter((line) => {
                const trimmed = line.trim();

                if (!trimmed.includes(":")) return true;

                const [label, value] = trimmed.split(":");

                const cleanValue = value?.trim();

                if (
                    !cleanValue ||
                    cleanValue === "[]" ||
                    cleanValue === "None" ||
                    cleanValue === "null"
                ) {
                    return false;
                }

                return true;
            })
            .join("\n");
    };

    const detectConfirmation = async (userMessage) => {

        let result = "false";

        const prompt = `
Determine if the user message confirms approval of a template.

User message: "${userMessage}"

Return ONLY true or false.
`;

        try {

            await CHAT_AGENT_RESPONSE(
                {
                    userMessage: prompt,
                    model: "llama-3.3-70b-versatile"
                },
                (chunk) => {
                    result = chunk.toLowerCase();
                }
            );

        } catch (err) {
            console.error("confirmation detection failed", err);
        }

        return result.includes("true");
    };

    const detectTemplateIntent = async (userMessage) => {

        let result = "false";

        const prompt = `
Determine if the user message indicates that they want to generate or send an outreach message to the candidates.

User message: "${userMessage}"

Return ONLY true or false.
`;

        try {

            await CHAT_AGENT_RESPONSE(
                {
                    userMessage: prompt,
                    model: "llama-3.3-70b-versatile"
                },
                (chunk) => {
                    result = chunk.toLowerCase();
                }
            );

        } catch (err) {
            console.error("template intent detection failed", err);
        }

        return result.includes("true");
    };

    const detectTemplateEdit = async (userMessage) => {

        let result = "false";

        const prompt = `
Determine if the user message asks to MODIFY an existing email template.

Examples:
- change subject
- make it shorter
- add salary
- rewrite professionally
- remove a line

User message: "${userMessage}"

Return ONLY true or false.
`;

        try {

            await CHAT_AGENT_RESPONSE(
                {
                    userMessage: prompt,
                    model: "llama-3.3-70b-versatile"
                },
                (chunk) => {
                    result = chunk.toLowerCase();
                }
            );

        } catch (err) {
            console.error("Template edit detection failed", err);
        }

        return result.includes("true");
    };

    const sendMessage = async (message, model = selectedModel) => {

        if (isPaused) {
            console.warn("Chat is paused. Cannot send message.");
            return;
        }

        let searchResult = null;

        const userMessage = {
            id: `user-${Date.now()}`,
            text: message,
            isUser: true,
            timestamp: Date.now(),
            isNew: false,
        };

        setMessages((prev) => [...prev, userMessage]);
        setIsGenerating(true);

        let currentChatId = chatId;

        // ---- TEMPLATE CONFIRMATION HANDLER ----
        if (awaitingTemplateConfirmation) {

            try {

                const confirmed = await detectConfirmation(message);

                if (confirmed) {

                    setShowTemplatePanel(true);
                    setShowCandidatePanel(false);
                    setAwaitingTemplateConfirmation(false);

                    setMessages(prev => [
                        ...prev,
                        {
                            id: `bot-${Date.now()}`,
                            text: "✅ Great! I'll proceed with this outreach template.",
                            isUser: false,
                            timestamp: Date.now(),
                            isNew: true
                        }
                    ]);

                    setIsGenerating(false);
                    return;
                }

            } catch (err) {
                console.error("Template confirmation detection failed", err);
            }
        }

        if (recruiterPhase === "OUTREACH_TEMPLATE") {

            const confirmed = await detectConfirmation(message);
            const wantsEdit = await detectTemplateEdit(message);

            // ✅ USER CONFIRMS TEMPLATE
            if (confirmed) {

                setShowTemplatePanel(true);
                setShowCandidatePanel(false);
                setAwaitingTemplateConfirmation(false);

                setMessages(prev => [
                    ...prev,
                    {
                        id: `bot-${Date.now()}`,
                        text: "✅ Great! I'll proceed with this outreach template.",
                        isUser: false,
                        timestamp: Date.now(),
                        isNew: true
                    }
                ]);

                setIsGenerating(false);
                return;
            }

            // ✏️ USER WANTS TO MODIFY TEMPLATE
            if (wantsEdit) {

                let updatedTemplate = "";

                try {

                    await CHAT_AGENT_RESPONSE(
                        {
                            userMessage: `
Modify the following recruiter outreach email based on the user's request.

Current Template:
${outreachTemplate}

User Request:
${message}

Rules:
- Keep placeholders like {FullName}
- Maintain professional recruiter tone
- Return the full updated email
`,
                            model: model?.name ?? "llama-3.3-70b-versatile"
                        },
                        (chunk) => {
                            updatedTemplate = chunk;
                        }
                    );

                } catch {
                    updatedTemplate = outreachTemplate;
                }

                setOutreachTemplate(updatedTemplate);

                setMessages(prev => [
                    ...prev,
                    {
                        id: `bot-${Date.now()}`,
                        text: `${updatedTemplate}

Would you like to use this template or make further changes?`,
                        isUser: false,
                        timestamp: Date.now(),
                        isNew: true
                    }
                ]);

                setIsGenerating(false);
                return;
            }
        }

        let fileData = null;

        if (uploadedFile) {
            try {
                const base64Content = await convertToBase64(uploadedFile);
                fileData = {
                    filename: uploadedFile.name,
                    base64Content,
                };
            } catch (err) {
                console.error("Error converting file to base64:", err);
            }
        }

        const fullMessages = [...messages, userMessage];
        const chatHistory = [];

        for (let i = fullMessages.length - 1; i >= 1 && chatHistory.length < 10; i--) {

            const msg = fullMessages[i];
            const prev = fullMessages[i - 1];

            if (!msg.isUser && prev?.isUser) {

                chatHistory.unshift({
                    userMessage: prev.text,
                    assistantMessage: msg.text,
                });

                i--;
            }
        }

        if (fullMessages.length === 0 || !chatHistory.some((item) => item.userMessage === message)) {

            chatHistory.push({
                userMessage: message,
                assistantMessage: "",
            });
        }

        if (token && !currentChatId) {

            try {

                const response = await CREATE_CHAT(message);

                if (response?.status === 200) {

                    currentChatId = response?.data?.chatId;

                    const newChat = {
                        chatId: currentChatId,
                        chatTitle: response?.data?.chatTitle,
                        timeStamp: response?.data?.timeStamp,
                        userId: response?.data?.userId,
                    };

                    setChatHistory((prevHistory) => [newChat, ...prevHistory]);
                    setChatId(currentChatId);

                    window.history.pushState({}, "", `/c/${currentChatId}`);

                } else {

                    console.error("Error creating chat:", response);
                    setIsGenerating(false);
                    return;
                }

            } catch (error) {

                console.error("Error creating chat:", error);
                setIsGenerating(false);
                return;
            }
        }

        // If candidates are already shown and user wants template → generate template directly
        if (recruiterPhase === "OUTREACH_CHANNEL") {

            const lower = message.toLowerCase();

            const confirmed = await detectConfirmation(message);
            const wantsTemplate = await detectTemplateIntent(message);

            if (confirmed || wantsTemplate) {

                setRecruiterPhase("OUTREACH_TEMPLATE");

                let template = "";

                try {

                    await CHAT_AGENT_RESPONSE(
                        {
                            userMessage: `
Generate a professional recruiter outreach email.

Job Title: ${jobData.jobTitle}
Experience: ${jobData.minExp}-${jobData.maxExp}
Location: ${jobData.location}
Skills: ${jobData.skills.join(", ")}

IMPORTANT RULES:

You may ONLY use these placeholders:

{FirstName}
{LastName}
{FullName}
{Company}
{JobTitle}
{Location}
{RecruiterName}
{RecruiterTitle}

Do NOT create any other placeholders.

DO NOT generate:
{CandidateName}
{NumberOfYears}
{YourName}

Write a short recruiter outreach email inviting the candidate for a discussion.
`,
                            model: model?.name ?? "llama-3.3-70b-versatile",
                            chatType: chatParam.chatType
                        },
                        (chunk) => {
                            template = chunk;
                        }
                    );

                } catch {
                    template = "⚠️ Failed to generate template.";
                }

                setOutreachTemplate(template);
                setAwaitingTemplateConfirmation(true);

                setMessages(prev => [
                    ...prev,
                    {
                        id: `bot-${Date.now()}`,
                        text: `${template}

Is this outreach template okay? You can confirm or ask me to modify it.`,
                        isUser: false,
                        timestamp: Date.now(),
                        isNew: true
                    }
                ]);

                setIsGenerating(false);
                return;
            }
        }

        let assistantMessageText = "";

        try {

            const processedHistory = [];

            const systemPrompt = RECRUITER_AGENT_PROMPT.replace(
                "{{JOB_DATA}}",
                JSON.stringify(jobData, null, 2)
            );

            await CHAT_AGENT_RESPONSE(
                {
                    userMessage: message,
                    systemMessage: systemPrompt,
                    model: model?.name ?? "llama-3.3-70b-versatile",
                    fileData,
                    chatHistory: processedHistory,
                    chatType: chatParam.chatType
                },
                (chunk) => {
                    assistantMessageText = chunk;
                }
            );

            const extractJobJSON = (text) => {

                try {

                    const regex = /JSON_START\s*([\s\S]*?)\s*JSON_END/;
                    const match = text.match(regex);

                    if (!match) return { parsed: null, cleanText: text };

                    const parsed = JSON.parse(match[1].trim());
                    const cleanText = text.replace(regex, "").trim();

                    return { parsed, cleanText };

                } catch (err) {

                    console.error("JSON parse error:", err);
                    return { parsed: null, cleanText: text };
                }
            };

            const { parsed, cleanText } = extractJobJSON(assistantMessageText);

            assistantMessageText = removeEmptyFields(cleanText);

            if (parsed) {

                const updatedJob = {

                    jobTitle: parsed.jobTitle || jobData.jobTitle,
                    minExp: parsed.minExp || jobData.minExp,
                    maxExp: parsed.maxExp || jobData.maxExp,
                    location: parsed.location || jobData.location,
                    skills: parsed.skills?.length ? parsed.skills : jobData.skills
                };

                let confirmSearch = parsed.confirmSearch || false;

                // if job is already complete but LLM didn't mark confirmSearch,
                // check user intent manually
                if (!confirmSearch && isJobComplete(updatedJob)) {
                    const userApproved = await detectConfirmation(message);
                    if (userApproved) {
                        confirmSearch = true;
                    }
                }

                setJobData(updatedJob);

                if (recruiterPhase === "JOB_COLLECTION" && isJobComplete(updatedJob) && confirmSearch) {

                    try {

                        const body = buildSearchBody(updatedJob);
                        const res = await searchCandidates(0, 20, body);

                        const list = res?.data?.candidates || [];
                        const total = res?.data?.total || 0;

                        setCandidates(list);
                        setShowCandidatePanel(true);
                        setRecruiterPhase("OUTREACH_CHANNEL");

                        const top5 = list.slice(0, 5);

                        setMessages(prev => [
                            ...prev,
                            {
                                id: `bot-${Date.now()}-candidates`,
                                text: `✨ I found ${total} candidates matching your requirements! Here are the top 5 best matches. You can review the remaining candidates in the right panel.`,
                                isUser: false,
                                timestamp: Date.now(),
                                isNew: true,
                                candidates: top5
                            }
                        ]);

                    } catch (err) {

                        console.error("Candidate search failed", err);
                    }

                    // Ask LLM to suggest outreach
                    let outreachQuestion = "";

                    try {

                        await CHAT_AGENT_RESPONSE(
                            {
                                userMessage: `
Candidates matching the job were found.

Ask the recruiter two things in a natural conversational way:

1. First check if the candidates look suitable or good.
2. Then suggest that you can generate an outreach email template to contact them.

Rules:
- Combine both ideas into one short conversational message.
- Do NOT include job details.
- Do NOT include JSON.
- Do NOT repeat candidate search information.
- Do NOT use fixed wording.

Example styles (do NOT copy exactly):
- "Do these candidates look good to you? I can also draft an outreach email template to contact them."
- "Are these candidates a good fit? If you'd like, I can generate an email template to reach out to them."
`,
                                model: model?.name ?? "llama-3.3-70b-versatile",
                                chatType: chatParam.chatType
                            },
                            (chunk) => {
                                outreachQuestion = chunk;
                            }
                        );

                    } catch (err) {
                        outreachQuestion = "These candidates look promising. Would you like me to generate an outreach email template?";
                    }

                    setMessages(prev => [
                        ...prev,
                        {
                            id: `bot-${Date.now()}-outreach`,
                            text: outreachQuestion,
                            isUser: false,
                            timestamp: Date.now(),
                            isNew: true
                        }
                    ]);
                    setIsGenerating(false);
                    return; // ✅ correct place
                }
            }

        } catch (err) {

            console.error("CHAT_RESPONSE failed", err);
            assistantMessageText = "⚠️ Failed to generate response.";
        }

        setMessages((prev) => [
            ...prev,
            {
                id: `bot-${Date.now()}`,
                text: assistantMessageText,
                isUser: false,
                timestamp: Date.now(),
                isNew: true,
            }
        ]);

        setIsGenerating(false);

        if (token && assistantMessageText && assistantMessageText !== "⚠️ Failed to generate response.") {

            try {

                await SAVE_CHAT({
                    chatId: currentChatId,
                    conversation: [
                        {
                            userMessage: message,
                            assistantMessage: assistantMessageText,
                        },
                    ],
                });

            } catch (err) {

                console.error("Failed to save chat", err);
            }
        }
    };

    const buildSearchBody = (data) => {
        return {
            criteria: {
                jobId: 0,
                titles: [data.jobTitle],
                matchOnlyCurrent: true,
                includeRelatedJobTitle: true,
                excludeJobTitles: [],
                skills: {
                    includes: data.skills,
                    excludes: []
                },
                visaStatuses: [],
                keyword: "",
                isSearch: "",
                url: "",
                experience: {
                    min: parseInt(data.minExp),
                    max: parseInt(data.maxExp)
                },
                education: {
                    degree: "",
                    university: "",
                    specialization: ""
                },
                companies: {
                    musts: [],
                    isCurrent: true,
                    isPast: true,
                    excludes: []
                },
                industries: {
                    includes: [],
                    excludes: []
                },
                locations: [
                    {
                        city: data.location,
                        state: "",
                        stateAlias: "",
                        countryCode: "",
                        postalCode: "",
                        distance: 0,
                        distanceUnit: ""
                    }
                ]
            }
        };
    };


    return (
        <ChatContext.Provider
            value={{
                messages,
                clearMessages,
                sendMessage,
                isPaused,
                setIsPaused,
                togglePause,
                uploadFile,
                uploadedFile,
                setUploadedFile,
                chatParam,
                setChatParam,
                isGenerating,
                setIsGenerating,
                isTypingDone,
                setIsTypingDone,
                candidates,
                showCandidatePanel,
                outreachTemplate,
                showTemplatePanel,
                jobData,
                setShowCandidatePanel,
                setShowTemplatePanel,
                jobData,
                setJobData
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);
